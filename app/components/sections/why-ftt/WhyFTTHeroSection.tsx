"use client";

import { motion } from "framer-motion";
import SectionContainer from "@/app/components/layout/SectionContainer";

const titleVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
};

const dividerVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.9,
      delay: 0.3,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0.34, 1.56, 0.64, 1] as const,
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function WhyFTTHeroSection() {
  return (
    <SectionContainer size="xl" noPaddingY className="mb-12 md:mb-16">
      <div className="text-center space-y-4">
        <motion.h1
        className="font-brand text-5xl md:text-7xl font-black tracking-tight text-gray-900 dark:text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={titleVariants}
      >
        Why <span className="text-primary">First Team</span> Trucking
      </motion.h1>
      <motion.div
        className="w-24 h-1.5 bg-primary mx-auto rounded-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={dividerVariants}
      ></motion.div>
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={descriptionVariants}
      >
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
          <motion.li variants={listItemVariants} className="flex items-start gap-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
            <motion.span 
              className="material-symbols-outlined text-primary text-xl sm:text-2xl mt-0.5 flex-shrink-0"
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >check_circle</motion.span>
            <span>Performance-based pay, earn more by driving safely and smartly</span>
          </motion.li>
          <motion.li variants={listItemVariants} className="flex items-start gap-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
            <motion.span 
              className="material-symbols-outlined text-primary text-xl sm:text-2xl mt-0.5 flex-shrink-0"
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >check_circle</motion.span>
            <span>New Amazon-branded equipment</span>
          </motion.li>
          <motion.li variants={listItemVariants} className="flex items-start gap-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
            <motion.span 
              className="material-symbols-outlined text-primary text-xl sm:text-2xl mt-0.5 flex-shrink-0"
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >check_circle</motion.span>
            <span>100% no-touch freight</span>
          </motion.li>
          <motion.li variants={listItemVariants} className="flex items-start gap-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
            <motion.span 
              className="material-symbols-outlined text-primary text-xl sm:text-2xl mt-0.5 flex-shrink-0"
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >check_circle</motion.span>
            <span>Dedicated lanes and consistent schedules</span>
          </motion.li>
          <motion.li variants={listItemVariants} className="flex items-start gap-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
            <motion.span 
              className="material-symbols-outlined text-primary text-xl sm:text-2xl mt-0.5 flex-shrink-0"
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >check_circle</motion.span>
            <span>Supportive coaching during onboarding and beyond</span>
          </motion.li>
          <motion.li variants={listItemVariants} className="flex items-start gap-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
            <motion.span 
              className="material-symbols-outlined text-primary text-xl sm:text-2xl mt-0.5 flex-shrink-0"
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >check_circle</motion.span>
            <span>Equal opportunity employer committed to inclusion</span>
          </motion.li>
          <motion.li variants={listItemVariants} className="flex items-start gap-3 text-base sm:text-lg text-gray-700 dark:text-gray-300 sm:col-span-2">
            <motion.span 
              className="material-symbols-outlined text-primary text-xl sm:text-2xl mt-0.5 flex-shrink-0"
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >check_circle</motion.span>
            <span>Be home every other day on single-shift schedules</span>
          </motion.li>
        </ul>
      </motion.div>
      </div>
    </SectionContainer>
  );
}
