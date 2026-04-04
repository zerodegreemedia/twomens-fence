import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  /** When false, renders dark text on light backgrounds. Default true (light text on dark bg). */
  light?: boolean;
}

export function StatCounter({ value, suffix = "", label, light = true }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  // Counter animation
  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  // Safety timeout — if useInView never fires after 3s, show the real value
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCount((prev) => (prev === 0 ? value : prev));
    }, 3000);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="text-center"
    >
      <div className={`text-4xl md:text-5xl font-extrabold ${light ? "text-action" : "text-trust"}`}>
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className={`mt-2 text-sm font-medium ${light ? "text-white/60" : "text-muted-foreground"}`}>{label}</div>
    </motion.div>
  );
}
