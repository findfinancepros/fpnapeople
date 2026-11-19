"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

// Client reporting portals (/clients/...) carry the client's own branding,
// so the FPnA site header, footer and back-to-top button are left out there.
export default function SiteChrome({ children }) {
  const pathname = usePathname() || "";
  const isPortal = pathname === "/clients" || pathname.startsWith("/clients/");

  if (isPortal) return <main>{children}</main>;

  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
