"use client";

import { motion } from "framer-motion";
import SectionContainer from "@/app/components/layout/SectionContainer";

const containerVariants = {
  hidden: { opacity: 0, scale: 1.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1] as const,
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0, y: -30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: 45 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -50, rotateZ: -10 },
  visible: {
    opacity: 1,
    x: 0,
    rotateZ: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 14,
    },
  },
};

export default function RequirementsHeroSection() {
  return (
    <section className="relative w-full bg-[#f8efef] dark:bg-slate-900 py-12 sm:py-16 md:py-24">
      <SectionContainer size="xl" noPaddingY>
      <motion.div
        className="text-center mb-12 md:mb-16 px-4 sm:px-6 lg:px-8 xl:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6"
          variants={badgeVariants}
        >
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-[10px] sm:text-xs font-bold text-primary tracking-widest uppercase">
            Amazon Freight Partner
          </span>
        </motion.div>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 sm:mb-6 uppercase text-slate-900 dark:text-white px-2"
          variants={titleVariants}
          style={{ transformPerspective: 1000 }}
        >
          What You&apos;ll <span className="text-primary">Need</span>
        </motion.h1>
        <motion.div
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
            <motion.li variants={listItemVariants} className="flex items-start gap-2">
              <motion.span 
                className="material-symbols-outlined text-primary text-lg sm:text-xl mt-0.5 flex-shrink-0"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                viewport={{ once: true }}
              >check_circle</motion.span>
              <span className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">Valid CDL Class A license</span>
            </motion.li>
            <motion.li variants={listItemVariants} className="flex items-start gap-2">
              <motion.span 
                className="material-symbols-outlined text-primary text-lg sm:text-xl mt-0.5 flex-shrink-0"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.3 }}
                viewport={{ once: true }}
              >check_circle</motion.span>
              <span className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">Clean MVR & background</span>
            </motion.li>
            <motion.li variants={listItemVariants} className="flex items-start gap-2">
              <motion.span 
                className="material-symbols-outlined text-primary text-lg sm:text-xl mt-0.5 flex-shrink-0"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.4 }}
                viewport={{ once: true }}
              >check_circle</motion.span>
              <span className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">Ability to pass a drug screen</span>
            </motion.li>
            <motion.li variants={listItemVariants} className="flex items-start gap-2">
              <motion.span 
                className="material-symbols-outlined text-primary text-lg sm:text-xl mt-0.5 flex-shrink-0"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.5 }}
                viewport={{ once: true }}
              >check_circle</motion.span>
              <span className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">English proficiency (verbal & written)</span>
            </motion.li>
            <motion.li variants={listItemVariants} className="flex items-start gap-2">
              <motion.span 
                className="material-symbols-outlined text-primary text-lg sm:text-xl mt-0.5 flex-shrink-0"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.6 }}
                viewport={{ once: true }}
              >check_circle</motion.span>
              <span className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">Basic technical skills</span>
            </motion.li>
            <motion.li variants={listItemVariants} className="flex items-start gap-2">
              <motion.span 
                className="material-symbols-outlined text-primary text-lg sm:text-xl mt-0.5 flex-shrink-0"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.7 }}
                viewport={{ once: true }}
              >check_circle</motion.span>
              <span className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">Strong communication skills</span>
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>
      </SectionContainer>
    </section>
  );
}
