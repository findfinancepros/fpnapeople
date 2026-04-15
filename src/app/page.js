import Link from "next/link";
import { Section, SectionHeader } from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import Counter from "@/components/Counter";
import { services, industries, testimonials, stats, site } from "@/data/site";

export const metadata = {
  title: "Strategic Finance Advisory & Power BI Automation",
  description:
    "We work alongside your finance team — advising, automating, and accelerating. Strategic finance advisory and Power BI automation for PE-backed and high-growth businesses.",
  alternates: { canonical: "/" },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "FPnA People Inc.",
  description:
    "Strategic finance advisory and Power BI automation for PE-backed portfolio companies and high-growth businesses.",
  url: site.url,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Suite 1400, 18 King St E",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M5C 1C4",
    addressCountry: "CA",
  },
  founder: {
    "@type": "Person",
    name: "Fahad Younus",
    jobTitle: "Founder & Principal",
    sameAs: [site.linkedin.fahad],
  },
  sameAs: [site.linkedin.company],
  areaServed: ["Canada", "United States"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* HERO */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-gold-500/5 blur-[140px]" />
        <div className="absolute -bottom-40 left-0 h-[500px] w-[500px] rounded-full bg-gold-500/5 blur-[140px]" />
        <div className="container-x relative py-32 md:py-44">
          <p className="eyebrow mb-6 animate-fade-in">Strategic Finance · Power BI · AI</p>
          <h1 className="heading-serif max-w-5xl text-balance text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
            Strategic Finance Advisory & Power BI Automation for{" "}
            <span className="text-gold-500">PE Portfolio Companies</span> and High-Growth Businesses
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-cream-200/75 md:text-2xl">
            We work alongside your finance team — advising, automating, and accelerating.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={site.calendly} target="_blank" rel="noreferrer" className="btn-primary">
              Book a Conversation →
            </a>
            <Link href="/powerbi" className="btn-secondary">
              View Our Work
            </Link>
          </div>
          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-cream-200/60">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              CPA, FCA
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              Ex-KPMG
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              15+ Years
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              Toronto · Canada · US
            </span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/5 bg-ink-800 py-20">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
            {stats.map((s) => (
              <Counter key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <Section>
        <SectionHeader
          eyebrow="How We Work"
          title="We don't replace your finance team — we amplify them."
          description="Engagements scale up and down. We come in with senior finance firepower, put the systems and frameworks in place, and transfer capability to your team so the improvement sticks long after we're gone."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Assess",
              body:
                "We map the current finance function — reporting, systems, close cycle, and what leadership actually needs to decide. Output: a prioritized plan with fast wins and longer-arc projects.",
            },
            {
              step: "02",
              title: "Implement",
              body:
                "We build — dashboards, models, close acceleration, ERP advisory, AI workflows — working alongside your team as an extension of the function, not a black-box consultant.",
            },
            {
              step: "03",
              title: "Transfer",
              body:
                "Knowledge, documentation, and ownership move to your team. We scale our involvement up or down based on what the business actually needs — not a retainer floor.",
            },
          ].map((s) => (
            <div key={s.step} className="card">
              <div className="font-serif text-5xl text-gold-500/60">{s.step}</div>
              <h3 className="heading-serif mt-4 text-2xl">{s.title}</h3>
              <p className="mt-4 leading-relaxed text-cream-200/75">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section className="bg-ink-800/50">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Services"
            title="Senior finance capability, delivered where you need it."
            description="From board-level strategy to Power BI builds to AI workflows — a connected set of services, not a menu of silos."
          />
          <Link href="/services" className="btn-ghost shrink-0">
            All services →
          </Link>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card group block">
              <div className="flex h-full flex-col">
                <h3 className="heading-serif text-xl leading-snug transition-colors group-hover:text-gold-400">
                  {s.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-cream-200/70">
                  {s.tagline}
                </p>
                <p className="mt-6 text-xs uppercase tracking-wider text-gold-500 transition-transform group-hover:translate-x-1">
                  Learn more →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Industries"
            title="Depth across the industries that move the needle."
            description="Operational finance expertise earned in manufacturing, real estate, SaaS, healthcare, fashion, e-commerce, and private equity."
          />
          <Link href="/industries" className="btn-ghost shrink-0">
            All industries →
          </Link>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <Link key={i.slug} href={`/industries/${i.slug}`} className="card group block">
              <h3 className="heading-serif text-xl transition-colors group-hover:text-gold-400">
                {i.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/70">{i.tagline}</p>
              <p className="mt-6 text-xs uppercase tracking-wider text-gold-500">
                Explore →
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="bg-ink-800/50">
        <SectionHeader eyebrow="In Their Words" title="What operators and executives say." />
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="relative rounded-sm border border-gold-500/10 bg-ink-700/40 p-10"
            >
              <span className="absolute left-6 top-2 font-serif text-8xl leading-none text-gold-500/20">
                &ldquo;
              </span>
              <p className="relative font-serif text-xl leading-relaxed text-cream-100 md:text-2xl">
                {t.quote}
              </p>
              <footer className="mt-8 border-t border-white/5 pt-6">
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex flex-col"
                >
                  <span className="font-medium text-gold-400 group-hover:text-gold-300">
                    {t.name}
                  </span>
                  <span className="text-sm text-cream-200/60">{t.role}</span>
                </a>
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
