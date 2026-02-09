"use client";

import { motion } from "framer-motion";
import SectionContainer from "@/app/components/layout/SectionContainer";

// Container for staggered stats
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Individual stat animation with scale effect
const statVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1] as const, // Bouncy easing
    },
  },
};

export default function StatsSection() {
  const stats = [
    {
      value: "98%",
      label: "Safety Score",
    },
    {
      value: "24/7",
      label: "Support Access",
    },
    {
      value: "500+",
      label: "Weekly Routes",
    },
    {
      value: "Top Tier",
      label: "Amazon Partner",
    },
  ];

  return (
    <section className="bg-slate-50 dark:bg-slate-900">
      <SectionContainer size="xl" className="py-12 sm:py-16">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={statVariants}
              >
                <p className="text-3xl font-extrabold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-slate-500 dark:text-white/60 text-sm font-medium uppercase tracking-tighter">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </SectionContainer>
      </section>
    );
}
