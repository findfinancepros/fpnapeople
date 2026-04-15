import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import { posts, getPost } from "@/data/posts";
import { site } from "@/data/site";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | FPnA People`,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      authors: ["Fahad Younus, CPA, FCA"],
    },
  };
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Fahad Younus, CPA, FCA",
      url: site.linkedin.fahad,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/blog/${post.slug}`,
    },
    articleSection: post.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero-gradient">
        <div className="container-x py-20 md:py-28">
          <nav aria-label="Breadcrumb" className="text-sm text-cream-200/60">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-gold-400">
                  Home
                </Link>
              </li>
              <li className="text-cream-200/30">/</li>
              <li>
                <Link href="/blog" className="hover:text-gold-400">
                  Blog
                </Link>
              </li>
              <li className="text-cream-200/30">/</li>
              <li className="text-cream-200/80" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider">
            <span className="text-gold-500">{post.category}</span>
            <span className="text-cream-200/40">•</span>
            <span className="text-cream-200/60">{formatDate(post.date)}</span>
            <span className="text-cream-200/40">•</span>
            <span className="text-cream-200/60">{post.readTime}</span>
          </div>

          <h1 className="heading-serif mt-6 max-w-4xl text-balance text-4xl leading-tight md:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          <div className="mt-10 flex items-center gap-4 border-t border-white/5 pt-8">
            <Image
              src="/images/fahad-younus.jpg"
              alt="Fahad Younus"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full border border-gold-500/40 object-cover"
            />
            <div>
              <p className="font-medium text-cream-100">Fahad Younus, CPA, FCA</p>
              <p className="text-sm text-cream-200/60">Founder, FPnA People Inc.</p>
            </div>
          </div>
        </div>
      </section>

      <Section className="!py-20 md:!py-24">
        <div className="grid gap-16 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div
              className="prose-blog"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-16 rounded-sm border border-gold-500/20 bg-ink-700/40 p-8">
              <p className="eyebrow mb-3">Work with us</p>
              <h3 className="heading-serif text-2xl md:text-3xl">
                Want to discuss how this applies to your portfolio company?
              </h3>
              <p className="mt-4 text-cream-200/75">
                A 30-minute conversation is usually enough to know whether we can help. No pitch,
                no slides — just a direct read of where you are and what the next move looks like.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={site.calendly}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Book a Conversation →
                </a>
                <Link href="/services" className="btn-secondary">
                  View Services
                </Link>
              </div>
            </div>
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-sm border border-gold-500/20 bg-ink-700/60 p-8">
              <p className="eyebrow mb-4">About the Editor</p>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/fahad-younus.jpg"
                  alt="Fahad Younus"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border border-gold-500/40 object-cover"
                />
                <div>
                  <p className="font-serif text-xl text-cream-100">Fahad Younus</p>
                  <p className="text-sm text-gold-400">CPA, FCA</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-cream-200/75">
                Founder of FPnA People Inc. Fractional CFO and strategic finance advisor to
                PE-backed and high-growth businesses across Canada and the US. Posts on this
                blog are reviewed and edited by Fahad before publication.
              </p>
              <a
                href={site.linkedin.fahad}
                target="_blank"
                rel="noreferrer"
                className="link-gold mt-4 inline-block text-sm"
              >
                Connect on LinkedIn →
              </a>
            </div>

            <div className="mt-6 rounded-sm border border-white/5 bg-ink-700/40 p-8">
              <p className="eyebrow mb-4">More posts</p>
              <ul className="space-y-4">
                {posts
                  .filter((p) => p.slug !== post.slug)
                  .slice(0, 3)
                  .map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="group block border-b border-white/5 pb-4 last:border-0"
                      >
                        <p className="text-xs uppercase tracking-wider text-gold-500">
                          {p.category}
                        </p>
                        <p className="mt-1 text-sm text-cream-100 transition-colors group-hover:text-gold-400">
                          {p.title}
                        </p>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
