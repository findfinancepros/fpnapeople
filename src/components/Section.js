export function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, description, align = "left" }) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="heading-serif text-balance text-4xl leading-tight md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-lg leading-relaxed text-cream-200/75">
          {description}
        </p>
      )}
      <div className={`mt-8 divider-gold ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
