"use client";

import { signIn } from "next-auth/react";

export default function SignInButton({ callbackUrl = "/clients" }) {
  return (
    <button className="btn-primary" onClick={() => signIn("fpna-clients", { callbackUrl })}>
      Sign in with email
    </button>
  );
}
