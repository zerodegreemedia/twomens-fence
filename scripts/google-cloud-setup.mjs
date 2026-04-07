#!/usr/bin/env node
/**
 * Automates Google Cloud Console setup for Calendar API OAuth:
 *  1. Enable Google Calendar API
 *  2. Configure OAuth consent screen (if needed)
 *  3. Create OAuth 2.0 Desktop client credentials
 *  4. Run the OAuth consent flow to get a refresh token
 *
 * Uses Playwright with persistent Chrome profile so it picks up
 * your existing Google sign-in session.
 */

import { chromium } from "playwright";
import http from "http";
import { URL } from "url";
import path from "path";
import os from "os";
import fs from "fs";

const OAUTH_PORT = 8219;
const REDIRECT_URI = `http://localhost:${OAUTH_PORT}/callback`;
const SCOPES = "https://www.googleapis.com/auth/calendar";

// Use a persistent browser context so Google sign-in is preserved
const USER_DATA_DIR = path.join(os.tmpdir(), "twomens-playwright-chrome");

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  console.log("\n=== Google Cloud Calendar API Setup ===\n");
  console.log("Launching Chrome with your signed-in session...\n");

  const context = await chromium.launchPersistentContext(USER_DATA_DIR, {
    headless: false,
    channel: "chrome",
    viewport: { width: 1280, height: 900 },
    args: ["--disable-blink-features=AutomationControlled"],
  });

  const page = await context.newPage();

  try {
    // ── Step 1: Pick or create a Google Cloud project ──────────
    console.log("Step 1: Navigating to Google Cloud Console...");
    await page.goto("https://console.cloud.google.com/projectselector2/apis/dashboard", {
      waitUntil: "networkidle",
      timeout: 60000,
    });

    // Wait for the user to be on the console (may need to re-auth)
    await page.waitForURL(/console\.cloud\.google\.com/, { timeout: 120000 });
    console.log("  Loaded Google Cloud Console.");

    // Check if we need to select/create a project
    // Try to go to a specific project or let the user pick one
    // First, let's check if there's already a project selected
    const currentUrl = page.url();

    if (currentUrl.includes("projectselector")) {
      console.log("  No project selected. Looking for an existing project or creating one...");

      // Look for an existing project to select
      const projectRows = page.locator('table tbody tr, [role="row"]');
      const projectCount = await projectRows.count().catch(() => 0);

      if (projectCount > 0) {
        // Click the first project
        await projectRows.first().click().catch(() => {});
        await sleep(3000);
      }

      // If still on project selector, create a new project
      if (page.url().includes("projectselector")) {
        console.log("  Creating a new project: 'twomens-fence-booking'...");
        await page.goto("https://console.cloud.google.com/projectcreate", {
          waitUntil: "networkidle",
          timeout: 30000,
        });

        // Fill project name
        const nameInput = page.locator('input[aria-label="Project name"], input[formcontrolname="projectName"], input#p6ntest-name-input');
        await nameInput.waitFor({ timeout: 15000 });
        await nameInput.fill("twomens-fence-booking");
        await sleep(1000);

        // Click Create
        const createBtn = page.getByRole("button", { name: /create/i });
        await createBtn.click();
        await sleep(8000); // Wait for project creation

        console.log("  Project created.");
      }
    }

    // ── Step 2: Enable Google Calendar API ────────────────────
    console.log("\nStep 2: Enabling Google Calendar API...");

    // Navigate to the Calendar API library page
    await page.goto(
      "https://console.cloud.google.com/apis/library/calendar-json.googleapis.com",
      { waitUntil: "networkidle", timeout: 30000 },
    );
    await sleep(2000);

    // Check if already enabled
    const enableBtn = page.getByRole("button", { name: /^enable$/i });
    const manageBtn = page.getByRole("button", { name: /^manage$/i });

    if (await manageBtn.isVisible().catch(() => false)) {
      console.log("  Google Calendar API is already enabled.");
    } else if (await enableBtn.isVisible().catch(() => false)) {
      await enableBtn.click();
      console.log("  Enabling...");
      await page.waitForURL(/apis\/api\/calendar-json/, { timeout: 30000 }).catch(() => {});
      await sleep(3000);
      console.log("  Google Calendar API enabled.");
    } else {
      console.log("  Could not find Enable button — API may already be enabled.");
    }

    // ── Step 3: Configure OAuth Consent Screen ─────────────────
    console.log("\nStep 3: Checking OAuth consent screen...");
    await page.goto(
      "https://console.cloud.google.com/apis/credentials/consent",
      { waitUntil: "networkidle", timeout: 30000 },
    );
    await sleep(2000);

    // Check if consent screen needs to be configured
    const externalRadio = page.locator('text=External').first();
    const getStartedBtn = page.getByRole("button", { name: /get started/i });
    const configuredIndicator = page.locator('text=Publishing status');

    if (await configuredIndicator.isVisible().catch(() => false)) {
      console.log("  OAuth consent screen already configured.");
    } else if (await externalRadio.isVisible().catch(() => false)) {
      // Need to set up consent screen
      console.log("  Setting up OAuth consent screen (External)...");
      await externalRadio.click();
      await sleep(500);

      const createConsentBtn = page.getByRole("button", { name: /create/i });
      if (await createConsentBtn.isVisible().catch(() => false)) {
        await createConsentBtn.click();
        await sleep(3000);
      }

      // Fill in the app name
      const appNameInput = page.locator('input[formcontrolname="displayName"], input[aria-label*="App name"], #appName');
      if (await appNameInput.isVisible().catch(() => false)) {
        await appNameInput.fill("TWOMENS Fence Booking");
        await sleep(500);
      }

      // Fill in user support email
      const supportEmail = page.locator('input[formcontrolname="supportEmail"], input[type="email"]').first();
      if (await supportEmail.isVisible().catch(() => false)) {
        await supportEmail.click();
        await sleep(500);
        // Try selecting from dropdown if it's a select
        const emailOption = page.locator('[role="option"]').first();
        if (await emailOption.isVisible().catch(() => false)) {
          await emailOption.click();
        }
      }

      // Save and continue through the steps
      const saveBtn = page.getByRole("button", { name: /save and continue/i });
      if (await saveBtn.isVisible().catch(() => false)) {
        await saveBtn.click();
        await sleep(2000);
      }

      // Skip scopes page
      if (await saveBtn.isVisible().catch(() => false)) {
        await saveBtn.click();
        await sleep(2000);
      }

      // Skip test users
      if (await saveBtn.isVisible().catch(() => false)) {
        await saveBtn.click();
        await sleep(2000);
      }

      console.log("  OAuth consent screen configured.");
    } else if (await getStartedBtn.isVisible().catch(() => false)) {
      // New-style consent screen setup
      console.log("  Setting up OAuth consent screen (new UI)...");
      await getStartedBtn.click();
      await sleep(3000);

      // Fill app name
      const appInput = page.locator('input').filter({ hasText: '' }).first();
      const allInputs = await page.locator('input[type="text"], input:not([type])').all();
      for (const input of allInputs) {
        const placeholder = await input.getAttribute("placeholder").catch(() => "");
        const label = await input.getAttribute("aria-label").catch(() => "");
        if (placeholder?.toLowerCase().includes("app") || label?.toLowerCase().includes("app")) {
          await input.fill("TWOMENS Fence Booking");
          break;
        }
      }
      await sleep(1000);

      // Look for next/continue button
      const nextBtn = page.getByRole("button", { name: /next|continue|save/i }).last();
      if (await nextBtn.isVisible().catch(() => false)) {
        await nextBtn.click();
        await sleep(3000);
      }

      console.log("  OAuth consent screen setup initiated.");
    }

    // ── Step 4: Create OAuth 2.0 Client ID ─────────────────────
    console.log("\nStep 4: Creating OAuth 2.0 Client ID...");
    await page.goto(
      "https://console.cloud.google.com/apis/credentials",
      { waitUntil: "networkidle", timeout: 30000 },
    );
    await sleep(2000);

    // Click "Create Credentials" > "OAuth client ID"
    const createCredBtn = page.getByRole("button", { name: /create credentials/i });
    if (await createCredBtn.isVisible().catch(() => false)) {
      await createCredBtn.click();
      await sleep(1000);

      // Select "OAuth client ID" from dropdown
      const oauthOption = page.locator('text=OAuth client ID').first();
      await oauthOption.click();
      await sleep(3000);

      // Select application type: "Web application"
      // (Desktop type doesn't support localhost redirect in all cases)
      const appTypeDropdown = page.locator('[role="listbox"], mat-select, select').first();
      if (await appTypeDropdown.isVisible().catch(() => false)) {
        await appTypeDropdown.click();
        await sleep(500);
        const webOption = page.locator('[role="option"]').filter({ hasText: /web application/i });
        if (await webOption.isVisible().catch(() => false)) {
          await webOption.click();
        } else {
          // Try desktop app
          const desktopOption = page.locator('[role="option"]').filter({ hasText: /desktop/i });
          if (await desktopOption.isVisible().catch(() => false)) {
            await desktopOption.click();
          }
        }
        await sleep(1000);
      }

      // Fill name
      const clientNameInput = page.locator('input[formcontrolname="name"], input[aria-label*="Name"]').first();
      if (await clientNameInput.isVisible().catch(() => false)) {
        await clientNameInput.clear();
        await clientNameInput.fill("TWOMENS Booking Calendar");
        await sleep(500);
      }

      // For web application type: add authorized redirect URI
      const addRedirectBtn = page.getByRole("button", { name: /add uri/i }).last();
      if (await addRedirectBtn.isVisible().catch(() => false)) {
        await addRedirectBtn.click();
        await sleep(500);
        const redirectInput = page.locator('input[placeholder*="URI"], input[aria-label*="URI"]').last();
        if (await redirectInput.isVisible().catch(() => false)) {
          await redirectInput.fill(REDIRECT_URI);
          await sleep(500);
        }
      }

      // Click Create
      const createOAuthBtn = page.getByRole("button", { name: /^create$/i });
      if (await createOAuthBtn.isVisible().catch(() => false)) {
        await createOAuthBtn.click();
        await sleep(3000);
      }

      console.log("  OAuth client created.");
    }

    // ── Step 5: Extract Client ID and Secret ───────────────────
    console.log("\nStep 5: Extracting credentials...");

    // After creation, a dialog should show with the client ID and secret
    // Try to read from the dialog
    let clientId = "";
    let clientSecret = "";

    // Look for the credentials dialog/modal
    const dialogTexts = await page.locator('[role="dialog"], .modal, mat-dialog-container').textContent().catch(() => "");

    // Try to find client ID and secret from page content
    const pageContent = await page.content();

    // Look for patterns like client ID and secret
    const clientIdMatch = pageContent.match(/(\d+-[a-z0-9]+\.apps\.googleusercontent\.com)/);
    if (clientIdMatch) {
      clientId = clientIdMatch[1];
    }

    // Try to get secret from a visible element
    const secretElements = await page.locator('input[readonly], .credential-value, [data-value]').all();
    for (const el of secretElements) {
      const val = await el.inputValue().catch(() => "") || await el.getAttribute("data-value").catch(() => "") || await el.textContent().catch(() => "");
      if (val && val.startsWith("GOCSPX-")) {
        clientSecret = val;
      }
    }

    // If we couldn't get them from the dialog, try the credentials list page
    if (!clientId || !clientSecret) {
      // Close any dialog
      const closeBtn = page.getByRole("button", { name: /ok|close|done/i });
      if (await closeBtn.isVisible().catch(() => false)) {
        await closeBtn.click();
        await sleep(1000);
      }

      // Navigate to credentials page and click on the client
      await page.goto("https://console.cloud.google.com/apis/credentials", {
        waitUntil: "networkidle",
        timeout: 30000,
      });
      await sleep(2000);

      // Click on the first OAuth 2.0 client ID link
      const clientLink = page.locator('a').filter({ hasText: /TWOMENS Booking|OAuth|client/i }).first();
      if (await clientLink.isVisible().catch(() => false)) {
        await clientLink.click();
        await sleep(3000);

        // Extract from the detail page
        const detailContent = await page.content();
        const idMatch2 = detailContent.match(/(\d+-[a-z0-9]+\.apps\.googleusercontent\.com)/);
        if (idMatch2) clientId = idMatch2[1];

        // Look for client secret on the page
        const allTextContent = await page.locator('body').textContent();
        const secretMatch = allTextContent.match(/(GOCSPX-[A-Za-z0-9_-]+)/);
        if (secretMatch) clientSecret = secretMatch[1];

        // Try getting it from input fields
        if (!clientSecret) {
          const inputs = await page.locator('input').all();
          for (const input of inputs) {
            const val = await input.inputValue().catch(() => "");
            if (val.startsWith("GOCSPX-")) {
              clientSecret = val;
              break;
            }
          }
        }
      }
    }

    if (!clientId || !clientSecret) {
      console.log("\n  Could not auto-extract credentials from the page.");
      console.log("  The browser is still open — please manually copy:");
      console.log("    - Client ID (ends with .apps.googleusercontent.com)");
      console.log("    - Client Secret (starts with GOCSPX-)");
      console.log("\n  Press Ctrl+C to exit when done, then run the refresh token script:");
      console.log('    $env:GOOGLE_CLIENT_ID="<your-client-id>"');
      console.log('    $env:GOOGLE_CLIENT_SECRET="<your-client-secret>"');
      console.log("    node scripts/google-oauth-setup.mjs\n");
      // Keep browser open for manual extraction
      await page.waitForTimeout(300000); // 5 min
      return;
    }

    console.log(`  Client ID:     ${clientId}`);
    console.log(`  Client Secret: ${clientSecret.substring(0, 10)}...`);

    // ── Step 6: OAuth consent flow to get refresh token ────────
    console.log("\nStep 6: Running OAuth consent flow for refresh token...");

    // Start local callback server
    const { refreshToken } = await new Promise((resolve, reject) => {
      const server = http.createServer(async (req, res) => {
        const url = new URL(req.url, `http://localhost:${OAUTH_PORT}`);
        if (url.pathname !== "/callback") { res.writeHead(404); res.end(); return; }

        const code = url.searchParams.get("code");
        if (!code) {
          res.writeHead(400, { "Content-Type": "text/html" });
          res.end("<h2>No code received</h2>");
          reject(new Error("No auth code"));
          server.close();
          return;
        }

        try {
          const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
              code,
              client_id: clientId,
              client_secret: clientSecret,
              redirect_uri: REDIRECT_URI,
              grant_type: "authorization_code",
            }),
          });
          const data = await tokenRes.json();
          if (!tokenRes.ok) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(`<h2>Token exchange failed</h2><pre>${JSON.stringify(data, null, 2)}</pre>`);
            reject(new Error(`Token exchange failed: ${JSON.stringify(data)}`));
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h2 style='color:green'>Success! Calendar access granted.</h2><p>You can close this tab.</p>");
            resolve({ refreshToken: data.refresh_token });
          }
        } catch (err) {
          res.writeHead(500, { "Content-Type": "text/html" });
          res.end(`<h2>Error</h2><pre>${err.message}</pre>`);
          reject(err);
        }
        server.close();
      });

      server.listen(OAUTH_PORT, async () => {
        // Build consent URL
        const consentUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
        consentUrl.searchParams.set("client_id", clientId);
        consentUrl.searchParams.set("redirect_uri", REDIRECT_URI);
        consentUrl.searchParams.set("response_type", "code");
        consentUrl.searchParams.set("scope", SCOPES);
        consentUrl.searchParams.set("access_type", "offline");
        consentUrl.searchParams.set("prompt", "consent");

        // Navigate in the same browser (already signed in)
        await page.goto(consentUrl.toString(), { timeout: 30000 });
      });

      // Timeout after 2 minutes
      setTimeout(() => reject(new Error("OAuth flow timed out")), 120000);
    });

    // ── Step 7: Print results ──────────────────────────────────
    console.log("\n================================================");
    console.log("   SETUP COMPLETE — Google Calendar Authorized!");
    console.log("================================================\n");
    console.log("Add these to Cloudflare Pages > Settings > Environment Variables:\n");
    console.log(`  GOOGLE_CLIENT_ID      = ${clientId}`);
    console.log(`  GOOGLE_CLIENT_SECRET  = ${clientSecret}`);
    console.log(`  GOOGLE_REFRESH_TOKEN  = ${refreshToken}`);
    console.log(`  GOOGLE_CALENDAR_ID    = <your calendar ID (usually your Gmail)>\n`);
    console.log("To find Calendar ID: Google Calendar > Settings > Your calendar > 'Integrate calendar'\n");

    // Save to a local env file for reference
    const envContent = [
      `GOOGLE_CLIENT_ID=${clientId}`,
      `GOOGLE_CLIENT_SECRET=${clientSecret}`,
      `GOOGLE_REFRESH_TOKEN=${refreshToken}`,
      `GOOGLE_CALENDAR_ID=<your-calendar-id>`,
    ].join("\n");

    const envPath = path.join(process.cwd(), ".env.google-calendar");
    fs.writeFileSync(envPath, envContent + "\n");
    console.log(`Credentials also saved to: ${envPath}`);
    console.log("(Do NOT commit this file — it's in your .gitignore)\n");

  } catch (err) {
    console.error("\nError during setup:", err.message);
    console.log("\nThe browser is still open. You may need to complete some steps manually.");
    console.log("Press Ctrl+C to exit.\n");
    await sleep(300000);
  } finally {
    await context.close();
  }
}

main();
