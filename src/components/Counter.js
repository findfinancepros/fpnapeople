"use client";
import { useEffect, useRef, useState } from "react";

export default function Counter({ value, label }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="border-l border-gold-500/20 pl-6">
      <div
        className={`font-serif text-5xl text-gold-500 transition-all duration-1000 md:text-6xl ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {value}
      </div>
      <div className="mt-3 text-sm uppercase tracking-wider text-cream-200/70">
        {label}
      </div>
    </div>
  );
}
