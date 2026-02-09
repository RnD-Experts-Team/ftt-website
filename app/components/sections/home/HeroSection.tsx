"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionContainer from "@/app/components/layout/SectionContainer";

// Animation variants for staggered content reveal
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

const itemVariants = {
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

const statsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const statItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function HeroSection() {
  return (
    <main className="relative flex min-h-screen w-full items-center pt-30 pb-10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-white/50 dark:from-charcoal dark:via-charcoal/70 dark:to-charcoal/40 z-10"></div>
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAicvgIsSNKrNrYejEr60E7ErkhhC1WgBWnLn97s5meREK8fvqXls-v8coUHvL5t_TjQdsiBKVfJnXd5js7h5MFEiwVKV6jNM1ElHpaelD3UzpIS-15341p8IOjLwc7AM-TGa7bU9Ws4Hs3I1TrjGvP1B_I3HPvANkRQhjtoyrHaUjoxPbaAhvQBmOWYCo_m_H09BaU4jZxKs6fSBYOjt2xnXcGjmeAWNsL8oGYGgmvLvaCncFqKmQLs9UKt7124njkB5Orib7VN0E")',
          }}
        ></div>
      </div>

      {/* Content Container */}
      <SectionContainer 
        size="xl" 
        noPaddingY 
        className="relative z-20"
      >
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-2 ">
            <span className="h-0.5 w-12 bg-primary"></span>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Amazon Freight Partner
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 font-brand text-5xl font-black italic leading-[0.95] tracking-tight text-slate-900 dark:text-white md:text-7xl lg:text-8xl uppercase dark:drop-shadow-[0_0_20px_rgba(235,25,32,0.2)]"
          >
            Drive with the best:
            <br />
            <span className="text-primary">Join First Team Trucking</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mb-10 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-300"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              First Team Trucking is a trusted Amazon Freight Partner operating dedicated regional lanes out of Indianapolis, Indiana. We specialize in safe, reliable, and professional CDL Class A transportation using Amazon-branded equipment.
            </motion.span>
            <br /><br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Whether you're an experienced driver or just starting your career, we focus on performance, safety, and growth, not just seniority. At First Team Trucking, every driver has a real opportunity to succeed.
            </motion.span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/apply-now" className="flex min-w-40 sm:min-w-50 cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 sm:px-7 sm:py-4 md:px-8 md:py-5 text-base sm:text-lg font-black uppercase tracking-widest text-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(235,25,32,0.2)] dark:shadow-[0_0_30px_rgba(235,25,32,0.4)]">
              APPLY NOW
              <span className="material-symbols-outlined">trending_flat</span>
            </Link>
            <button className="flex min-w-40 sm:min-w-50 cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-900/20 bg-slate-900/5 px-6 py-3 sm:px-7 sm:py-4 md:px-8 md:py-5 text-base sm:text-lg font-bold uppercase tracking-widest text-slate-900 backdrop-blur-sm transition-all hover:bg-slate-900/10 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
              LEARN MORE
            </button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={statsVariants}
            className="mt-16 grid grid-cols-2 gap-8 border-t border-slate-200 dark:border-white/10 pt-10 md:grid-cols-4"
          >
            <motion.div variants={statItemVariants} className="flex flex-col">
              <span className="text-3xl font-brand font-black italic text-slate-900 dark:text-white">
                $75k+
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Avg. Earnings
              </span>
            </motion.div>
            <motion.div variants={statItemVariants} className="flex flex-col">
              <span className="text-3xl font-brand font-black italic text-slate-900 dark:text-white">
                Daily
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Home Time
              </span>
            </motion.div>
            <motion.div variants={statItemVariants} className="flex flex-col">
              <span className="text-3xl font-brand font-black italic text-slate-900 dark:text-white">
                Brand New
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Fleet Quality
              </span>
            </motion.div>
            <motion.div variants={statItemVariants} className="flex flex-col">
              <span className="text-3xl font-brand font-black italic text-slate-900 dark:text-white">
                Indy
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Base Hub
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-white/30"
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 1,
          ease: [0.25, 0.1, 0.25, 1] as const,
        }}
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
          Explore
        </span>
        <motion.span
          className="material-symbols-outlined"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1] as const,
          }}
        >
          keyboard_double_arrow_down
        </motion.span>
      </motion.div>
    </main>
  );
}
