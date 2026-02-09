"use client";

import { motion } from "framer-motion";
import SectionContainer from "@/app/components/layout/SectionContainer";

const headerVariants = {
  hidden: { opacity: 0, scale: 0.9, y: -30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -80, rotateZ: -10 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    rotateZ: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.25,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  }),
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: (index: number) => ({
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 150,
      damping: 12,
      delay: index * 0.25 + 0.3,
    },
  }),
};

const connectorVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.2,
      delay: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function PerformancePathSection() {
  const steps = [
    {
      icon: "shield",
      title: "1. Safety First",
      description:
        "Maintain zero incidents and high safety scores to qualify for tier advancement.",
      highlight: false,
    },
    {
      icon: "schedule",
      title: "2. Reliability",
      description:
        "Consistent on-time deliveries build trust and earn you priority on high-value routes.",
      highlight: false,
    },
    {
      icon: "payments",
      title: "3. The Reward",
      description:
        "Unlock maximum hours, performance bonuses, and elite lead driver roles.",
      highlight: true,
    },
  ];

  return (
    <SectionContainer size="xl" className="py-24 bg-background-light dark:bg-background-dark relative mb-16 rounded-3xl">
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headerVariants}
      >
        <h2 className="text-4xl text-slate-900 dark:text-white uppercase mb-4 font-black tracking-tight">
          The Path to Peak Earnings
        </h2>
        <p className="text-slate-500 dark:text-gray-400 max-w-2xl mx-auto">
          Our transparent performance model shows exactly how you can increase
          your take-home pay through professional excellence.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connector line for desktop */}
        <motion.div
          className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={connectorVariants}
        ></motion.div>

        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`relative z-10 flex flex-col items-center text-center p-8 rounded-xl border transition-colors ${
              step.highlight
                ? "bg-primary border-primary shadow-lg shadow-primary/20"
                : "bg-white dark:bg-card-dark border-slate-200 dark:border-white/5 hover:border-primary/50"
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={index}
            variants={stepVariants}
            whileHover={{
              y: -8,
              scale: 1.03,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                step.highlight
                  ? "bg-white"
                  : "bg-slate-50 dark:bg-background-dark border-2 border-primary/30"
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={iconVariants}
            >
              <span
                className={`material-symbols-outlined text-3xl ${
                  step.highlight ? "text-primary" : "text-primary"
                }`}
              >
                {step.icon}
              </span>
            </motion.div>
            <h3
              className={`text-xl font-bold mb-2 ${
                step.highlight ? "text-white" : "text-slate-900 dark:text-white"
              }`}
            >
              {step.title}
            </h3>
            <p
              className={`text-sm ${
                step.highlight ? "text-white/90 font-medium" : "text-slate-500 dark:text-gray-400"
              }`}
            >
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
