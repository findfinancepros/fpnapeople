"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-ink-900/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-serif text-xl text-cream-100 md:text-2xl">
            FPnA <span className="text-gold-500">People</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-cream-200/80 transition-colors hover:text-gold-400"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href={site.calendly} target="_blank" rel="noreferrer" className="btn-primary">
            Let&apos;s Talk
          </a>
        </div>

        <button
          className="lg:hidden text-cream-100"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-ink-900/95 backdrop-blur-md lg:hidden">
          <div className="container-x flex flex-col gap-4 py-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-cream-200/90 hover:text-gold-400"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={site.calendly}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-2 w-fit"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
