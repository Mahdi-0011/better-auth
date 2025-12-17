"use client";

import { authClient } from "../lib/auth-clinte";

export default function SignOutButton() {
  const handleSignOut = async () => {
    await authClient.signOut(); // just call signOut without options
    // redirect manually if needed
    window.location.href = "/"; 
  };

  return (
    <button onClick={handleSignOut}>
      Sign Out
    </button>
  );
}
