import type { Variants } from "framer-motion";

/* ──────────────────────────────────────────────
   Shared animation variants — single source of truth
   ────────────────────────────────────────────── */

/** Fade up with subtle y movement. Use with whileInView + VIEWPORT. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" },
  }),
};

/** Opacity-only fade — no y movement. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" },
  }),
};

/** Stagger children. Apply to parent with initial="hidden" + whileInView="visible". */
export const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.08 } },
};

/** Standard viewport config — triggers when 10% visible, fires once. */
export const VIEWPORT = { once: true, amount: 0.1 } as const;
