import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import { caseStudies } from "@/data/site";
import { getCaseStudyDetail } from "@/data/case-studies";

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const detail = getCaseStudyDetail(params.slug);
  if (!detail) return {};
  return {
    title: detail.title,
    description: detail.challenge.slice(0, 155),
    alternates: { canonical: `/case-studies/${params.slug}` },
  };
}

export default function CaseStudyPage({ params }) {
  const detail = getCaseStudyDetail(params.slug);
  if (!detail) notFound();

  return (
    <>
      <section className="hero-gradient">
        <div className="container-x py-24 md:py-32">
          <Link href="/case-studies" className="btn-ghost text-sm">
            ← All case studies
          </Link>
          <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-wider">
            <span className="text-gold-500">{detail.industry}</span>
            {detail.anonymized && (
              <span className="rounded-sm border border-white/10 px-2 py-0.5 text-cream-200/50">
                Anonymized
              </span>
            )}
          </div>
          <h1 className="heading-serif mt-6 max-w-4xl text-balance text-5xl leading-tight md:text-6xl lg:text-7xl">
            {detail.title}
          </h1>
          {detail.note && (
            <p className="mt-6 max-w-3xl rounded-sm border border-gold-500/20 bg-ink-700/40 p-4 text-sm italic text-cream-200/70">
              {detail.note}
            </p>
          )}
        </div>
      </section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-3">
          <div className="space-y-14 lg:col-span-2">
            <div>
              <p className="eyebrow mb-4">The Challenge</p>
              <p className="text-lg leading-relaxed text-cream-200/85">{detail.challenge}</p>
            </div>

            <div>
              <p className="eyebrow mb-4">What We Did</p>
              <ul className="space-y-3">
                {detail.approach.map((a) => (
                  <li key={a} className="flex gap-4 border-b border-white/5 pb-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    <span className="text-cream-200/85">{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-4">Outcome</p>
              <p className="text-lg leading-relaxed text-cream-200/85">{detail.outcome}</p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-sm border border-gold-500/20 bg-ink-700/60 p-8">
              <p className="eyebrow mb-4">Highlights</p>
              <ul className="space-y-4">
                {detail.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-cream-200/85">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {detail.download && (
          <div className="mt-20 rounded-sm border border-gold-500/20 bg-ink-700/40 p-10">
            <p className="eyebrow mb-3">Download</p>
            <h3 className="heading-serif text-3xl">{detail.download.label}</h3>
            {detail.download.note && (
              <p className="mt-3 text-cream-200/70">{detail.download.note}</p>
            )}
            <a href={detail.download.href} download className="btn-primary mt-6">
              Download Model →
            </a>
          </div>
        )}

        {detail.embed && (
          <div className="mt-20">
            <p className="eyebrow mb-3">Interactive Dashboard</p>
            <h3 className="heading-serif text-3xl">Explore the live dashboard.</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={detail.embed.href} target="_blank" rel="noreferrer" className="btn-secondary">
                View Full Dashboard ↗
              </a>
            </div>
            <div className="mt-8 overflow-hidden rounded-sm border border-gold-500/20 bg-ink-700/40">
              <div className="relative w-full" style={{ paddingTop: "70%" }}>
                <iframe
                  title="Dashboard"
                  src={detail.embed.href}
                  frameBorder="0"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        )}
      </Section>

      <CtaBand title="Could your business use something like this?" />
    </>
  );
}
