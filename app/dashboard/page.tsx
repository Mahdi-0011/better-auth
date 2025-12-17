"use client";

import { useEffect, useState } from "react";
import { authClient } from "../lib/auth-clinte";
import SignOutButton from "../components/SignOutButton";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [user, setUser] = useState<{ name?: string; email: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const result = await authClient.getSession();

        // better-auth wraps session in `data` property
        const session = "data" in result ? result.data : null;

        if (!session?.user) {
          router.push("/"); // redirect if not signed in
        } else {
          setUser(session.user); // now TypeScript knows user exists
        }
      } catch (err) {
        console.error(err);
        router.push("/"); // fallback
      }
    };

    fetchSession();
  }, [router]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Hello, {user.name || user.email}!</p>
      <SignOutButton />
    </div>
  );
}
