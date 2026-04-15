import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import { services, industries, getService, site } from "@/data/site";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.tagline,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default function ServicePage({ params }) {
  const s = getService(params.slug);
  if (!s) notFound();

  const related = industries.filter((i) => s.industries.includes(i.slug));

  return (
    <>
      <section className="hero-gradient">
        <div className="container-x py-24 md:py-32">
          <Link href="/services" className="btn-ghost text-sm">
            ← All services
          </Link>
          <p className="eyebrow mt-8 mb-4">Service</p>
          <h1 className="heading-serif max-w-4xl text-balance text-5xl leading-tight md:text-6xl lg:text-7xl">
            {s.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-cream-200/80 md:text-2xl">{s.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={site.calendly} target="_blank" rel="noreferrer" className="btn-primary">
              Book a Conversation →
            </a>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="eyebrow mb-4">Overview</p>
            <p className="text-lg leading-relaxed text-cream-200/85">{s.description}</p>

            <div className="mt-14">
              <p className="eyebrow mb-4">Key Deliverables</p>
              <ul className="space-y-3">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex gap-4 border-b border-white/5 pb-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    <span className="text-cream-200/85">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-sm border border-gold-500/20 bg-ink-700/60 p-8">
              <p className="eyebrow mb-4">Who It's For</p>
              <ul className="space-y-4">
                {s.forWhom.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-cream-200/80">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-white/5 pt-6">
                <a href={site.calendly} target="_blank" rel="noreferrer" className="btn-primary w-full">
                  Book a Call →
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="bg-ink-800/50">
          <p className="eyebrow mb-4">Related Industries</p>
          <h2 className="heading-serif mb-12 text-4xl">Where we deploy this most.</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}`} className="card group">
                <h3 className="heading-serif text-xl group-hover:text-gold-400">{i.title}</h3>
                <p className="mt-3 text-sm text-cream-200/70">{i.tagline}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CtaBand title={`Let's talk about ${s.title}.`} />
    </>
  );
}
