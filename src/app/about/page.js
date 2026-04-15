import Image from "next/image";
import { Section } from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";

export const metadata = {
  title: "About — Fahad Younus, CPA, FCA",
  description:
    "FPnA People Inc. is a Toronto-based finance advisory and automation firm. Founded by Fahad Younus, CPA, FCA — 15+ years, ex-KPMG.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient">
        <div className="container-x py-24 md:py-32">
          <p className="eyebrow mb-4">About</p>
          <h1 className="heading-serif max-w-4xl text-5xl leading-tight md:text-6xl lg:text-7xl">
            A finance firm built to amplify internal teams — not sideline them.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-cream-200/80">
            FPnA People Inc. is a Toronto-based finance advisory and automation firm working with
            PE-backed portfolio companies and high-growth businesses across Canada and the United
            States.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Philosophy</p>
            <h2 className="heading-serif text-4xl leading-tight md:text-5xl">
              The best finance outcomes happen when internal teams are empowered — not sidelined.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-cream-200/80">
            <p>
              Traditional advisory often leaves the client dependent. We do the opposite — we embed
              senior finance capability, implement the systems and frameworks that make the function
              run, and transfer ownership so the improvement compounds long after we're gone.
            </p>
            <p>
              That's why engagements scale up and down. We come in heavy to solve the hard problem,
              then step back to an advisory cadence. If your team has taken ownership of a dashboard,
              a close process, or a reporting pack we built, that's a win — not lost revenue.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-ink-800/50">
        <p className="eyebrow mb-4">Leadership</p>
        <h2 className="heading-serif mb-16 text-4xl md:text-5xl">Founder & Principal.</h2>
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm border border-gold-500/20 bg-ink-700">
              <Image
                src="/images/fahad-younus.jpg"
                alt="Fahad Younus, CPA, FCA — Founder of FPnA People Inc."
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="lg:col-span-3">
            <h3 className="heading-serif text-4xl">Fahad Younus, CPA, FCA</h3>
            <p className="mt-2 text-gold-500">Founder & Principal</p>
            <p className="mt-6 text-lg leading-relaxed text-cream-200/85">
              Strategic finance executive with 15+ years partnering with PE-backed, founder-led, and
              tech-enabled businesses ($5M–$200M+ revenue). Former KPMG professional. Raised $90M+ in
              capital, managed $500M+ loan portfolios, led ERP implementations (Dynamics, NetSuite,
              SAP, Yardi), and built AI-enabled finance functions.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { label: "Designation", value: "CPA, Ontario" },
                { label: "Fellow Chartered Accountant", value: "FCA, ICAP" },
                { label: "Prior Firm", value: "KPMG" },
              ].map((c) => (
                <div key={c.label} className="rounded-sm border border-white/5 bg-ink-700/60 p-4">
                  <div className="text-xs uppercase tracking-wider text-gold-500">{c.label}</div>
                  <div className="mt-1 text-cream-100">{c.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={site.linkedin.fahad} target="_blank" rel="noreferrer" className="btn-secondary">
                LinkedIn →
              </a>
              <a href={site.calendly} target="_blank" rel="noreferrer" className="btn-primary">
                Book a Conversation
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">Where We Work</p>
          <h2 className="heading-serif text-4xl leading-tight md:text-5xl">
            Based in Toronto, serving clients across Canada and the United States.
          </h2>
          <p className="mt-6 text-lg text-cream-200/75">
            Our office is at {site.address}. Most engagements run remotely with on-site visits when
            the work benefits from being in the room.
          </p>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
