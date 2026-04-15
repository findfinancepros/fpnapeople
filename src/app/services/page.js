import Link from "next/link";
import { Section, SectionHeader } from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import { services } from "@/data/site";

export const metadata = {
  title: "Fractional CFO, Power BI Automation & FP&A Services",
  description:
    "Fractional CFO, controller, bookkeeping, FP&A consulting, Power BI automation, ERP advisory, exit readiness, and AI for finance — PE-backed and growth companies.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndex() {
  return (
    <>
      <section className="hero-gradient">
        <div className="container-x py-24 md:py-32">
          <p className="eyebrow mb-4">Services</p>
          <h1 className="heading-serif max-w-4xl text-5xl leading-tight md:text-6xl lg:text-7xl">
            Senior finance capability, delivered where you need it.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream-200/75">
            From board-level strategy to Power BI builds to AI workflows, our services compound.
            They're designed to plug into an existing finance team and scale based on what the business actually needs.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card group flex flex-col">
              <p className="eyebrow">Service</p>
              <h2 className="heading-serif mt-3 text-3xl transition-colors group-hover:text-gold-400">
                {s.title}
              </h2>
              <p className="mt-4 text-lg text-cream-200/80">{s.tagline}</p>
              <p className="mt-4 flex-1 leading-relaxed text-cream-200/65">{s.description}</p>
              <p className="mt-6 text-xs uppercase tracking-wider text-gold-500 transition-transform group-hover:translate-x-1">
                Read more →
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
