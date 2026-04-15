import { services, industries, caseStudies, site } from "@/data/site";
import { posts } from "@/data/posts";

export default function sitemap() {
  const now = new Date();
  const base = site.url;
  const staticPaths = [
    "",
    "/services",
    "/industries",
    "/powerbi",
    "/case-studies",
    "/about",
    "/blog",
    "/contact",
  ];

  const statics = staticPaths.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));

  const serviceUrls = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const industryUrls = industries.map((i) => ({
    url: `${base}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const caseUrls = caseStudies.map((c) => ({
    url: `${base}/case-studies/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const postUrls = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...statics, ...serviceUrls, ...industryUrls, ...caseUrls, ...postUrls];
}
