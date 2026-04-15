import { Section } from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import { powerBiReports } from "@/data/site";

export const metadata = {
  title: "Power BI Dashboards for Finance | Interactive Samples | FPnA People",
  description:
    "Live, interactive Power BI dashboard samples for finance — retail, Shopify, financial statements, and inventory analytics. Explore real work from FPnA People.",
  alternates: { canonical: "/powerbi" },
};

export default function PowerBIShowcase() {
  return (
    <>
      <section className="hero-gradient">
        <div className="container-x py-24 md:py-32">
          <p className="eyebrow mb-4">Power BI Showcase</p>
          <h1 className="heading-serif max-w-4xl text-5xl leading-tight md:text-6xl lg:text-7xl">
            Interactive Power BI Dashboards — See Our Work in Action
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-cream-200/80">
            Unlike most advisory firms, we let you experience our work firsthand. Explore these
            live, interactive dashboards built for real businesses.
          </p>
        </div>
      </section>

      <Section>
        <div className="space-y-24">
          {powerBiReports.map((r, idx) => (
            <div key={r.title}>
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="eyebrow mb-3">Dashboard {String(idx + 1).padStart(2, "0")}</p>
                  <h2 className="heading-serif text-3xl md:text-4xl">{r.title}</h2>
                  <p className="mt-3 max-w-3xl text-cream-200/75">{r.description}</p>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-sm border border-gold-500/20 bg-ink-700/40">
                <div className="relative w-full" style={{ paddingTop: "62.25%" }}>
                  <iframe
                    title={r.title}
                    src={r.src}
                    frameBorder="0"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </div>

              <p className="mt-4 text-xs italic text-cream-200/50">
                These are sample dashboards with anonymized data. Your dashboards are custom-built for your business.
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand title="Want a dashboard built for your business?" />
    </>
  );
}
