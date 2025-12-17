import { betterAuth } from "better-auth";

export const auth = betterAuth({
  socialProviders: {
    microsoft: {
      clientId: process.env.MICROSOFT_CLIENT_ID!,
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET!,
      tenantId: "common",
      authority: "https://login.microsoftonline.com",
      prompt: "select_account",
    },
  },
});
