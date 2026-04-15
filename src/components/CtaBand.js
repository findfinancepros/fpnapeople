import { site } from "@/data/site";

export default function CtaBand({
  title = "Ready to Elevate Your Finance Function?",
  description = "Let's talk about how strategic finance, Power BI automation, and AI can compound into a real competitive advantage.",
  primaryLabel = "Book a Conversation",
}) {
  return (
    <section className="relative overflow-hidden border-y border-gold-500/10 bg-gradient-to-b from-ink-800 to-ink-900 py-24">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(600px circle at 20% 30%, rgba(212,168,83,0.15), transparent)",
      }} />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="heading-serif text-balance text-4xl md:text-5xl">{title}</h3>
          <p className="mt-6 text-lg text-cream-200/75">{description}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={site.calendly} target="_blank" rel="noreferrer" className="btn-primary">
              {primaryLabel} →
            </a>
            <a href={`mailto:${site.email}`} className="btn-secondary">
              Email Fahad
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
