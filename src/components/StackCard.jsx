import { useLayoutEffect, useRef, useState } from "react";

// A glass card that pins while scrolling so the next card slides over it.
// Tall cards pin by their bottom edge so none of their content is ever hidden.
export default function StackCard({ index = 0, id, children }) {
  const ref = useRef(null);
  const [top, setTop] = useState(16 + Math.min(index, 6) * 14);

  useLayoutEffect(() => {
    const el = ref.current;
    const calc = () =>
      setTop(Math.min(16 + Math.min(index, 6) * 14, window.innerHeight - el.offsetHeight - 16));
    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(el);
    window.addEventListener("resize", calc);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", calc);
    };
  }, [index]);

  return (
    <section
      id={id}
      ref={ref}
      style={{ top }}
      className="stack-card sticky mb-8 scroll-mt-4 rounded-3xl p-6 sm:p-8"
    >
      {children}
    </section>
  );
}
