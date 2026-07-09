import React, { useEffect, useState } from "react";
import { motion, useSpring, useInView } from "motion/react";

const metrics = [
  { label: "Projects Delivered", value: 150, suffix: "+" },
  { label: "Years Building", value: 5, suffix: "+" },
  { label: "Client Satisfaction", value: 99, suffix: "%" },
  { label: "Avg Turnaround", value: 14, suffix: " Days" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    bounce: 0,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

export const MetricsBar: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#050505] border-y border-white/5">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-6">
        {metrics.map((metric, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center text-center px-4 ${
              i !== 0 && i !== 2 ? "border-l border-white/5" : ""
            } ${i === 2 || i === 3 ? "md:border-l border-white/5" : ""}`}
          >
            <h4 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-2">
              <Counter value={metric.value} suffix={metric.suffix} />
            </h4>
            <p className="text-xs tracking-widest uppercase text-zinc-500 font-bold">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
