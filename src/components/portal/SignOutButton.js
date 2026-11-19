"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton({ callbackUrl = "/clients" }) {
  return (
    <button
      onClick={() => signOut({ callbackUrl })}
      className="rounded-sm border border-[#1C3422]/30 px-4 py-2 text-[#1C3422] hover:bg-[#1C3422]/5"
    >
      Sign out
    </button>
  );
}
