"use client";

import { motion } from "framer-motion";
import SectionContainer from "@/app/components/layout/SectionContainer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: -60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const badgeContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.6,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
};

const badgeVariants = {
  hidden: (index: number) => {
    const angles = [-120, 0, 120];
    const angle = (angles[index] * Math.PI) / 180;
    return {
      opacity: 0,
      x: Math.cos(angle) * 60,
      y: Math.sin(angle) * 60,
      scale: 0.5,
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

export default function RequirementsCTASection() {
  const badges = [
    { icon: "security", text: "Secure Process" },
    { icon: "timer", text: "Apply in 5 Mins" },
    { icon: "group", text: "Equal Opportunity Employer" },
  ];

  return (
    <SectionContainer size="xl" noPaddingY className="mb-16">
      <motion.div
        className="flex flex-col items-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-4 sm:px-6 lg:px-8 xl:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.button
          className="w-full sm:w-auto sm:min-w-[280px] md:min-w-[320px] bg-primary hover:bg-red-700 text-white py-4 sm:py-5 px-6 sm:px-8 rounded-lg sm:rounded-xl text-base sm:text-lg font-black tracking-widest uppercase transition-colors transform shadow-2xl shadow-primary/30"
          variants={buttonVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Application
        </motion.button>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8"
          variants={badgeContainerVariants}
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-1.5 sm:gap-2"
              custom={index}
              variants={badgeVariants}
              whileHover={{ scale: 1.1, opacity: 1 }}
            >
              <span className="material-symbols-outlined text-sm sm:text-base text-slate-700 dark:text-slate-300">
                {badge.icon}
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                {badge.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
