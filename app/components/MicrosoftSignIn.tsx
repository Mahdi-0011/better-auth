"use client";

import { authClient } from "../lib/auth-clinte";

export default function MicrosoftSignIn() {
  const signIn = async () => {
    await authClient.signIn.social({
      provider: "microsoft",
      callbackURL: "/dashboard",
    });
  };

  return (
    <button onClick={signIn}>
      Sign in with Microsoft
    </button>
  );
}
