import Link from "next/link";
import { Section } from "@/components/Section";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Insights & Writing",
  description: "Insights on strategic finance, Power BI automation, and AI for finance.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="hero-gradient">
        <div className="container-x py-24 md:py-32">
          <p className="eyebrow mb-4">Blog</p>
          <h1 className="heading-serif max-w-4xl text-5xl leading-tight md:text-6xl lg:text-7xl">
            Insights coming soon.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream-200/75">
            We're working on a set of deep-dives on strategic finance, Power BI automation, and AI
            for finance. In the meantime, visit our case studies.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/case-studies" className="btn-primary">
              View Case Studies →
            </Link>
            <Link href="/powerbi" className="btn-secondary">
              Power BI Showcase
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
