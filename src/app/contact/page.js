import { Section } from "@/components/Section";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact | Fractional CFO & Finance Advisory | FPnA People",
  description:
    "Book a 30-minute finance strategy intro call with Fahad Younus, CPA, FCA. Toronto-based fractional CFO and finance advisory serving Canada and the US.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient">
        <div className="container-x py-24 md:py-32">
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="heading-serif max-w-4xl text-5xl leading-tight md:text-6xl lg:text-7xl">
            Let's Talk Finance.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream-200/80">
            Book a 30-minute finance strategy intro call, or reach out directly. We'll be honest
            about whether we're the right fit.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="eyebrow mb-4">Book a Call</p>
            <h2 className="heading-serif mb-6 text-3xl md:text-4xl">
              Finance Strategy Intro Call
            </h2>
            <div className="overflow-hidden rounded-sm border border-gold-500/20 bg-ink-700/40">
              <iframe
                src={site.calendly}
                title="Book a finance strategy call"
                className="h-[760px] w-full"
                frameBorder="0"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-sm text-cream-200/60">
              Calendar not loading?{" "}
              <a href={site.calendly} target="_blank" rel="noreferrer" className="link-gold">
                Open in a new tab.
              </a>
            </p>
          </div>

          <aside className="space-y-8">
            <div className="rounded-sm border border-gold-500/20 bg-ink-700/60 p-8">
              <p className="eyebrow mb-4">Direct</p>
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-cream-200/50">Phone</dt>
                  <dd className="mt-1">
                    <a href={`tel:${site.phone}`} className="link-gold">
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-cream-200/50">LinkedIn</dt>
                  <dd className="mt-1 space-y-1">
                    <a href={site.linkedin.fahad} target="_blank" rel="noreferrer" className="link-gold block text-sm">
                      Connect with Fahad →
                    </a>
                    <a href={site.linkedin.company} target="_blank" rel="noreferrer" className="link-gold block text-sm">
                      FPnA People Inc. →
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-sm border border-gold-500/20 bg-ink-700/60 p-8">
              <p className="eyebrow mb-4">Office</p>
              <address className="not-italic leading-relaxed text-cream-200/85">
                Suite 1400<br />
                18 King St E<br />
                Toronto, ON M5C 1C4<br />
                Canada
              </address>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
