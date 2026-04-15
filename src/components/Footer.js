import Link from "next/link";
import { services, industries, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-900">
      <div className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="font-serif text-2xl text-cream-100">
              FPnA <span className="text-gold-500">People</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-200/70">
              Toronto-based strategic finance advisory and Power BI automation for
              PE-backed portfolio companies and high-growth businesses across
              Canada and the United States.
            </p>
            <div className="mt-6 space-y-1 text-sm text-cream-200/80">
              <p>{site.address}</p>
              <p>
                <a href={`mailto:${site.email}`} className="link-gold">
                  {site.email}
                </a>
              </p>
              <p>
                <a href={`tel:${site.phone}`} className="link-gold">
                  {site.phone}
                </a>
              </p>
            </div>
            <div className="mt-6 flex gap-4 text-sm">
              <a href={site.linkedin.company} target="_blank" rel="noreferrer" className="link-gold">
                LinkedIn
              </a>
              <a href={site.directory} target="_blank" rel="noreferrer" className="link-gold">
                Our Directory — FindFinancePros.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="eyebrow mb-4">Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-cream-200/70 hover:text-gold-400"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-gold-400 hover:text-gold-300">
                  All services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-4">Industries</h4>
            <ul className="space-y-2">
              {industries.slice(0, 6).map((i) => (
                <li key={i.slug}>
                  <Link
                    href={`/industries/${i.slug}`}
                    className="text-sm text-cream-200/70 hover:text-gold-400"
                  >
                    {i.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/industries" className="text-sm text-gold-400 hover:text-gold-300">
                  All industries →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-cream-200/70 hover:text-gold-400">About</Link></li>
              <li><Link href="/case-studies" className="text-sm text-cream-200/70 hover:text-gold-400">Case Studies</Link></li>
              <li><Link href="/powerbi" className="text-sm text-cream-200/70 hover:text-gold-400">Power BI Showcase</Link></li>
              <li><Link href="/blog" className="text-sm text-cream-200/70 hover:text-gold-400">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-cream-200/70 hover:text-gold-400">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-cream-200/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} FPnA People Inc. All rights reserved.</p>
          <p>CPA, FCA · Ex-KPMG · 15+ Years</p>
        </div>
      </div>
    </footer>
  );
}
