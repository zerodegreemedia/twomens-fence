#!/usr/bin/env node
/**
 * One-time helper to obtain a Google OAuth 2.0 refresh token.
 *
 * Usage:
 *   1. Create an OAuth 2.0 Client ID in Google Cloud Console (Desktop app type)
 *   2. Run: GOOGLE_CLIENT_ID=xxx GOOGLE_CLIENT_SECRET=yyy node scripts/google-oauth-setup.mjs
 *   3. Open the printed URL in your browser and grant calendar access
 *   4. Paste the authorization code back into the terminal
 *   5. Copy the printed refresh token into your Cloudflare env vars
 */

import { createInterface } from "readline";

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = "urn:ietf:wg:oauth:2.0:oob"; // "copy/paste" flow for desktop apps

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("Error: Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET env vars first.");
  console.error("Example: GOOGLE_CLIENT_ID=xxx GOOGLE_CLIENT_SECRET=yyy node scripts/google-oauth-setup.mjs");
  process.exit(1);
}

const SCOPES = "https://www.googleapis.com/auth/calendar";

// Step 1: Print the consent URL
const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
authUrl.searchParams.set("client_id", CLIENT_ID);
authUrl.searchParams.set("redirect_uri", REDIRECT_URI);
authUrl.searchParams.set("response_type", "code");
authUrl.searchParams.set("scope", SCOPES);
authUrl.searchParams.set("access_type", "offline");
authUrl.searchParams.set("prompt", "consent");

console.log("\n=== Google Calendar OAuth Setup ===\n");
console.log("1. Open this URL in your browser:\n");
console.log(authUrl.toString());
console.log("\n2. Sign in with the Google account that owns the calendar.");
console.log("3. Grant calendar access.");
console.log("4. Copy the authorization code and paste it below.\n");

// Step 2: Read the auth code
const rl = createInterface({ input: process.stdin, output: process.stdout });

rl.question("Authorization code: ", async (code) => {
  rl.close();

  if (!code.trim()) {
    console.error("No code provided. Exiting.");
    process.exit(1);
  }

  // Step 3: Exchange code for tokens
  try {
    const res = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code: code.trim(),
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        grant_type: "authorization_code",
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("\nToken exchange failed:", data);
      process.exit(1);
    }

    console.log("\n=== Success! ===\n");
    console.log("Add these to your Cloudflare Pages environment variables:\n");
    console.log(`  GOOGLE_CLIENT_ID      = ${CLIENT_ID}`);
    console.log(`  GOOGLE_CLIENT_SECRET  = ${CLIENT_SECRET}`);
    console.log(`  GOOGLE_REFRESH_TOKEN  = ${data.refresh_token}`);
    console.log(`  GOOGLE_CALENDAR_ID    = (your calendar ID, e.g. your Gmail address)\n`);
    console.log("To find your Calendar ID:");
    console.log("  Google Calendar → Settings → click your calendar → 'Integrate calendar' → Calendar ID\n");
  } catch (err) {
    console.error("Error exchanging code:", err);
    process.exit(1);
  }
});
