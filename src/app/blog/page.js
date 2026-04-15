import Link from "next/link";
import { Section } from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import { getSortedPosts } from "@/data/posts";

export const metadata = {
  title: "Insights & Writing | FPnA People",
  description:
    "Insights on PE advisory, fractional CFO strategy, Power BI automation, and FP&A — from Fahad Younus, CPA, FCA.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getSortedPosts();

  return (
    <>
      <section className="hero-gradient">
        <div className="container-x py-24 md:py-32">
          <p className="eyebrow mb-4">Blog</p>
          <h1 className="heading-serif max-w-4xl text-5xl leading-tight md:text-6xl lg:text-7xl">
            Insights for Operators &amp; Sponsors.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream-200/75">
            Practical notes on PE advisory, fractional CFO work, and the reporting stacks that
            support real decision-making — written from inside the work, not from the outside.
          </p>
        </div>
      </section>

      <Section className="!pt-16 md:!pt-20">
        <ul className="divide-y divide-white/5">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block py-10 transition-colors hover:bg-ink-700/30"
              >
                <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-10">
                  <div className="space-y-2 text-sm">
                    <p className="eyebrow">{post.category}</p>
                    <p className="text-cream-200/60">{formatDate(post.date)}</p>
                    <p className="text-cream-200/50">{post.readTime}</p>
                  </div>
                  <div>
                    <h2 className="heading-serif text-balance text-2xl leading-tight transition-colors group-hover:text-gold-400 md:text-3xl lg:text-4xl">
                      {post.title}
                    </h2>
                    <p className="mt-4 max-w-3xl text-cream-200/75">{post.excerpt}</p>
                    <p className="mt-5 text-sm font-medium text-gold-400">
                      Read article →
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
