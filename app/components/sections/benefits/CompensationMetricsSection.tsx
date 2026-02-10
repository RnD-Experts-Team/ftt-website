"use client";

import { motion, Variants } from "framer-motion";
import SectionContainer from "@/app/components/layout/SectionContainer";

/* ------------------ Animations (TS-safe) ------------------ */

const metricVariants: Variants = {
  hidden: (index: number) => {
    const positions = [
      { x: -80, y: 40, rotate: -10 },
      { x: 0, y: -60, rotate: 0 },
      { x: 80, y: 40, rotate: 10 },
    ];

    return {
      opacity: 0,
      ...positions[index % positions.length],
    };
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1], // ✅ TS-safe easing
    },
  },
};

const iconVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.2,
    },
  },
};

/* ------------------ Component ------------------ */

export default function CompensationMetricsSection() {
  const metrics = [
    {
      icon: "payments",
      title: "Weekly Pay",
      value: "Competitive & Reliable",
      description: "Consistent earnings paid every Friday.",
    },
    {
      icon: "military_tech",
      title: "Performance Bonus",
      value: "Up to 10% Quarterly",
      description: "Earn more for safety and reliability.",
    },
    {
      icon: "event_available",
      title: "PTO Accrual",
      value: "15 Days Per Year",
      description: "Paid time off starts accruing on day one.",
    },
  ];

  return (
    <section className="relative w-full bg-[#f8efef] dark:bg-slate-900 py-10 sm:py-12">
      <SectionContainer size="xl" noPaddingY className="overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 lg:px-8 xl:px-0">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={metricVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="
              w-full
              bg-white
              dark:bg-card-dark
              border
              border-slate-200
              dark:border-card-border
              p-5
              sm:p-6
              rounded-lg
              sm:rounded-xl
              flex
              flex-col
              gap-2
              sm:gap-2.5
              transition-colors
              hover:border-primary/50
            "
          >
            <motion.span
              variants={iconVariants}
              className="material-symbols-outlined text-primary text-3xl sm:text-4xl"
            >
              {metric.icon}
            </motion.span>

            <h3 className="text-slate-600 dark:text-slate-400 text-[10px] sm:text-xs font-medium uppercase tracking-widest">
              {metric.title}
            </h3>

            <p className="text-slate-900 dark:text-white text-xl sm:text-2xl md:text-3xl font-black break-words">
              {metric.value}
            </p>

            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              {metric.description}
            </p>
          </motion.div>
        ))}
      </div>
      </SectionContainer>
    </section>
  );
}
