import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import { industries, getIndustry, site } from "@/data/site";

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }) {
  const i = getIndustry(params.slug);
  if (!i) return {};
  return {
    title: `${i.title} Fractional CFO & Finance Advisory`,
    description: `${i.title} fractional CFO, Power BI automation, and finance advisory. ${i.tagline}`.slice(0, 158),
    alternates: { canonical: `/industries/${i.slug}` },
  };
}

export default function IndustryPage({ params }) {
  const i = getIndustry(params.slug);
  if (!i) notFound();

  return (
    <>
      <section className="hero-gradient">
        <div className="container-x py-24 md:py-32">
          <Link href="/industries" className="btn-ghost text-sm">
            ← All industries
          </Link>
          <p className="eyebrow mt-8 mb-4">Industry</p>
          <h1 className="heading-serif max-w-4xl text-balance text-5xl leading-tight md:text-6xl lg:text-7xl">
            {i.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-cream-200/80 md:text-2xl">{i.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={site.calendly} target="_blank" rel="noreferrer" className="btn-primary">
              Book a Conversation →
            </a>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Overview</p>
          <p className="text-lg leading-relaxed text-cream-200/85">{i.description}</p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="eyebrow mb-4">Areas of Expertise</p>
            <ul className="space-y-3">
              {i.expertise.map((e) => (
                <li key={e} className="flex gap-4 border-b border-white/5 pb-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  <span className="text-cream-200/85">{e}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-8">
            <div className="rounded-sm border border-gold-500/20 bg-ink-700/60 p-8">
              <p className="eyebrow mb-4">Systems</p>
              <ul className="space-y-2">
                {i.systems.map((sys) => (
                  <li key={sys} className="text-sm text-cream-200/85">• {sys}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-sm border border-gold-500/20 bg-ink-700/60 p-8">
              <p className="eyebrow mb-4">Metrics We Track</p>
              <ul className="space-y-2">
                {i.metrics.map((m) => (
                  <li key={m} className="text-sm text-cream-200/85">• {m}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <CtaBand title={`Ready to unlock ${i.title.toLowerCase()} finance?`} />
    </>
  );
}
