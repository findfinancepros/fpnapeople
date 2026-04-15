import Link from "next/link";
import { Section } from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import { industries } from "@/data/site";

export const metadata = {
  title: "Industries We Serve",
  description:
    "Manufacturing, SaaS, real estate, healthcare, e-commerce, fashion, and private equity — operational finance depth across the industries that move the needle.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesIndex() {
  return (
    <>
      <section className="hero-gradient">
        <div className="container-x py-24 md:py-32">
          <p className="eyebrow mb-4">Industries</p>
          <h1 className="heading-serif max-w-4xl text-5xl leading-tight md:text-6xl lg:text-7xl">
            Depth across the industries that move the needle.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream-200/75">
            Operational finance isn't a template. Every industry has its own cost structure,
            cadence, and reporting expectations. Here's where we've built it.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((i) => (
            <Link key={i.slug} href={`/industries/${i.slug}`} className="card group flex flex-col">
              <p className="eyebrow">Industry</p>
              <h2 className="heading-serif mt-3 text-3xl group-hover:text-gold-400">{i.title}</h2>
              <p className="mt-4 text-lg text-cream-200/80">{i.tagline}</p>
              <p className="mt-4 flex-1 leading-relaxed text-cream-200/65">{i.description}</p>
              <p className="mt-6 text-xs uppercase tracking-wider text-gold-500 group-hover:translate-x-1">
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
