"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton({ light = false }) {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/clients" })}
      className={light ? "rounded-sm border border-[#1C3422]/30 px-4 py-2 text-[#1C3422] hover:bg-[#1C3422]/5" : "btn-secondary"}
    >
      Sign out
    </button>
  );
}
