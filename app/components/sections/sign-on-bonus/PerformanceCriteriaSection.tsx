"use client";

import { motion } from "framer-motion";
import SectionContainer from "@/app/components/layout/SectionContainer";

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

const headerVariants = {
  hidden: { opacity: 0, y: -30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
};

const criteriaItemVariants = {
  hidden: (index: number) => {
    const angle = (index * 90) * (Math.PI / 180);
    const distance = 50;
    return {
      opacity: 0,
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      scale: 0.8,
    };
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
};

const iconPulseVariants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: [0.45, 0.05, 0.55, 0.95] as const,
    },
  },
};

export default function PerformanceCriteriaSection() {
  const criteria = [
    {
      icon: "shield",
      title: "Zero Safety Violations",
      description:
        "Maintain a clean driving record with no at-fault incidents or safety breaches.",
    },
    {
      icon: "schedule",
      title: "100% On-Time Performance",
      description:
        "Consistent adherence to delivery schedules and shift appointments.",
    },
    {
      icon: "verified",
      title: "AFP Compliance",
      description:
        "Full adherence to Amazon Freight Partner operational standards.",
    },
    {
      icon: "speed",
      title: "Electronic Logs (ELD)",
      description:
        "Accurate and timely logging of hours in compliance with DOT regulations.",
    },
  ];

  return (
    <section className="relative w-full bg-[#f8efef] dark:bg-slate-900 py-12 md:py-16">
      <SectionContainer size="xl" noPaddingY>
      <motion.section
        className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-7 md:p-8 lg:p-10 xl:p-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
      <div className="max-w-5xl mx-auto">
        <motion.h3
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3"
          variants={headerVariants}
        >
          Performance Criteria
        </motion.h3>
        <motion.p
          className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 sm:mb-10 md:mb-12"
          variants={headerVariants}
        >
          To ensure the highest standards for our partners, the following
          criteria must be maintained throughout the 90-day coaching period to
          unlock the full sign-on bonus.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12 gap-y-6 sm:gap-y-7 md:gap-y-8">
          {criteria.map((item, index) => (
            <motion.div
              key={index}
              className="flex gap-3 sm:gap-4"
              custom={index}
              variants={criteriaItemVariants}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20"
                variants={iconPulseVariants}
                initial="initial"
                animate="animate"
              >
                <span className="material-symbols-outlined text-primary text-lg sm:text-xl">
                  {item.icon}
                </span>
              </motion.div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm sm:text-base md:text-lg text-slate-900 dark:text-white mb-1">{item.title}</h4>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </motion.section>
      </SectionContainer>
    </section>
  );
}
