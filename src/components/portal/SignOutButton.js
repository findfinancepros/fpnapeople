"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton({ callbackUrl = "/clients", color = "#1C3422" }) {
  return (
    <button
      onClick={() => signOut({ callbackUrl })}
      className="portal-outline-btn rounded-sm border px-4 py-2"
      style={{ color, borderColor: `color-mix(in srgb, ${color} 30%, transparent)`, "--hover": color }}
    >
      Sign out
    </button>
  );
}
