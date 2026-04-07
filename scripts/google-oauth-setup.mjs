#!/usr/bin/env node
/**
 * One-time helper to obtain a Google OAuth 2.0 refresh token.
 *
 * Usage:
 *   1. Create an OAuth 2.0 Client ID in Google Cloud Console (Desktop app type)
 *   2. Run (PowerShell):
 *        $env:GOOGLE_CLIENT_ID="your-client-id"
 *        $env:GOOGLE_CLIENT_SECRET="your-client-secret"
 *        node scripts/google-oauth-setup.mjs
 *
 *      Run (bash/zsh):
 *        GOOGLE_CLIENT_ID=xxx GOOGLE_CLIENT_SECRET=yyy node scripts/google-oauth-setup.mjs
 *
 *   3. A browser window will open for Google sign-in
 *   4. Grant calendar access — the refresh token prints to your terminal
 */

import http from "http";
import { URL } from "url";

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const PORT = 8219; // arbitrary high port unlikely to conflict
const REDIRECT_URI = `http://localhost:${PORT}/callback`;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("\nError: Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET env vars first.\n");
  console.error("PowerShell:");
  console.error('  $env:GOOGLE_CLIENT_ID="your-client-id"');
  console.error('  $env:GOOGLE_CLIENT_SECRET="your-client-secret"');
  console.error("  node scripts/google-oauth-setup.mjs\n");
  console.error("Bash/Zsh:");
  console.error("  GOOGLE_CLIENT_ID=xxx GOOGLE_CLIENT_SECRET=yyy node scripts/google-oauth-setup.mjs\n");
  process.exit(1);
}

const SCOPES = "https://www.googleapis.com/auth/calendar";

// Build consent URL
const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
authUrl.searchParams.set("client_id", CLIENT_ID);
authUrl.searchParams.set("redirect_uri", REDIRECT_URI);
authUrl.searchParams.set("response_type", "code");
authUrl.searchParams.set("scope", SCOPES);
authUrl.searchParams.set("access_type", "offline");
authUrl.searchParams.set("prompt", "consent");

// Start a temporary local server to catch the OAuth callback
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  if (url.pathname !== "/callback") {
    res.writeHead(404);
    res.end("Not found");
    return;
  }

  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");

  if (error) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h2>Authorization denied</h2><p>${error}</p><p>You can close this tab.</p>`);
    console.error(`\nAuthorization denied: ${error}`);
    server.close();
    process.exit(1);
  }

  if (!code) {
    res.writeHead(400, { "Content-Type": "text/html" });
    res.end("<h2>No authorization code received</h2><p>You can close this tab.</p>");
    return;
  }

  // Exchange code for tokens
  try {
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        grant_type: "authorization_code",
      }),
    });

    const data = await tokenRes.json();

    if (!tokenRes.ok) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<h2>Token exchange failed</h2><pre>${JSON.stringify(data, null, 2)}</pre><p>You can close this tab.</p>`);
      console.error("\nToken exchange failed:", data);
      server.close();
      process.exit(1);
    }

    // Success!
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <h2 style="color: green;">Success!</h2>
      <p>Google Calendar access granted. You can close this tab.</p>
      <p>Check your terminal for the credentials to copy.</p>
    `);

    console.log("\n========================================");
    console.log("   SUCCESS — Google Calendar Authorized");
    console.log("========================================\n");
    console.log("Add these to your Cloudflare Pages Environment Variables");
    console.log("(Settings > Environment Variables > Production):\n");
    console.log(`  GOOGLE_CLIENT_ID      = ${CLIENT_ID}`);
    console.log(`  GOOGLE_CLIENT_SECRET  = ${CLIENT_SECRET}`);
    console.log(`  GOOGLE_REFRESH_TOKEN  = ${data.refresh_token}`);
    console.log(`  GOOGLE_CALENDAR_ID    = <your calendar ID>\n`);
    console.log("To find your Calendar ID:");
    console.log("  Google Calendar > Settings > click your calendar > 'Integrate calendar'\n");
    console.log("(Usually it's just your Gmail address for the primary calendar)\n");

    server.close();
    process.exit(0);
  } catch (err) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end(`<h2>Error</h2><pre>${err.message}</pre><p>You can close this tab.</p>`);
    console.error("\nError exchanging code:", err);
    server.close();
    process.exit(1);
  }
});

server.listen(PORT, () => {
  console.log("\n=== Google Calendar OAuth Setup ===\n");
  console.log("Opening your browser for Google sign-in...\n");
  console.log("If the browser doesn't open automatically, visit:\n");
  console.log(authUrl.toString());
  console.log("\n(Waiting for authorization...)\n");

  // Try to open the browser automatically
  const openCmd =
    process.platform === "win32" ? "start" :
    process.platform === "darwin" ? "open" : "xdg-open";

  import("child_process").then(({ exec }) => {
    exec(`${openCmd} "${authUrl.toString()}"`);
  }).catch(() => {
    // Silently fail — user can copy the URL manually
  });
});
