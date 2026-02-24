'use client';

import { motion } from 'framer-motion';
import SectionContainer from '@/app/components/layout/SectionContainer';

export default function GalleryActionBarSection() {
  const leftActionsVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        staggerChildren: 0.1,
      },
    },
  };

  const actionItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.34, 1.56, 0.64, 1] as const,
      },
    },
  };

  const dividerVariants = {
    hidden: { opacity: 0, scaleY: 0 },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section className="relative w-full bg-[#E8E8E0] dark:bg-slate-900 py-12 md:py-16">
      <SectionContainer size="xl" noPaddingY>
      <motion.div
        className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 py-8 border-t border-slate-200 dark:border-steel-gray/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div
          className="flex items-center gap-4"
          variants={leftActionsVariants}
        >
          <motion.div
            className="flex flex-col items-center gap-1 group cursor-pointer"
            variants={actionItemVariants}
          >
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-steel-gray/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-slate-900 dark:text-white group-hover:text-primary">
                zoom_out_map
              </span>
            </div>
            <span className="text-xs font-semibold uppercase text-slate-600 dark:text-slate-400">
              Full Screen
            </span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-1 group cursor-pointer"
            variants={actionItemVariants}
          >
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-steel-gray/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-slate-900 dark:text-white group-hover:text-primary">
                share
              </span>
            </div>
            <span className="text-xs font-semibold uppercase text-slate-600 dark:text-slate-400">
              Share
            </span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-1 group cursor-pointer"
            variants={actionItemVariants}
          >
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-steel-gray/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-slate-900 dark:text-white group-hover:text-primary">
                favorite
              </span>
            </div>
            <span className="text-xs font-semibold uppercase text-slate-600 dark:text-slate-400">
              Save
            </span>
          </motion.div>
        </motion.div>
        <motion.div
          className="h-10 w-px bg-slate-200 dark:bg-steel-gray/20 hidden sm:block"
          variants={dividerVariants}
        ></motion.div>
        <motion.button
          className="bg-primary hover:bg-red-700 text-white px-8 py-3 rounded-lg text-base font-bold uppercase transition-all flex items-center gap-2"
          variants={buttonVariants}
        >
          Become a Driver
          <span className="material-symbols-outlined">trending_flat</span>
        </motion.button>
      </motion.div>
      </SectionContainer>
    </section>
  );
}
