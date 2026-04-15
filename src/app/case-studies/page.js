import Link from "next/link";
import { Section } from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import { caseStudies } from "@/data/site";

export const metadata = {
  title: "Case Studies | Fractional CFO & Power BI Automation",
  description:
    "Selected client work — fintech models, Power BI dashboards, finance transformation, and compounding pharmacy automation. Real outcomes from FPnA People.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesIndex() {
  return (
    <>
      <section className="hero-gradient">
        <div className="container-x py-24 md:py-32">
          <p className="eyebrow mb-4">Case Studies</p>
          <h1 className="heading-serif max-w-4xl text-5xl leading-tight md:text-6xl lg:text-7xl">
            Selected client work.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-cream-200/75">
            Real businesses. Real outcomes. Where confidentiality allows, we share the
            detail — including interactive dashboards and downloadable models.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((c) => (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}`}
              className="card group flex flex-col"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider">
                <span className="text-gold-500">{c.industry}</span>
                {c.anonymized && (
                  <span className="rounded-sm border border-white/10 px-2 py-0.5 text-cream-200/50">
                    Anonymized
                  </span>
                )}
              </div>
              <h2 className="heading-serif mt-4 text-3xl group-hover:text-gold-400">
                {c.title}
              </h2>
              <p className="mt-4 flex-1 leading-relaxed text-cream-200/75">{c.summary}</p>
              <p className="mt-6 text-xs uppercase tracking-wider text-gold-500 group-hover:translate-x-1">
                Read case study →
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
