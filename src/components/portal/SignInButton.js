"use client";

import { signIn } from "next-auth/react";

export default function SignInButton({ callbackUrl = "/clients", color = "#1C3422", textColor = "#FBF0E2", provider = "fpna-clients" }) {
  return (
    <button
      className="inline-flex items-center justify-center rounded-sm px-6 py-3 font-medium transition-opacity hover:opacity-90"
      style={{ background: color, color: textColor }}
      // prompt=login makes Microsoft ask for the account every time, so a previous
      // person's sign-in on the same computer is never reused.
      onClick={() => signIn(provider, { callbackUrl }, { prompt: "login" })}
    >
      Sign in
    </button>
  );
}
