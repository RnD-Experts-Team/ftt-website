"use client";

import { motion } from "framer-motion";
import SectionContainer from "@/app/components/layout/SectionContainer";

const contentVariants = {
  hidden: { opacity: 0, x: -60, y: 60 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1] as const,
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.2, x: 60, y: -60 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 20, rotateX: -45 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 12,
    },
  },
};

export default function BonusHeroSection() {
  return (
    <SectionContainer size="xl" noPaddingY className="mb-10 md:mb-12">
      <div className="relative overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <motion.div
          className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 space-y-4 sm:space-y-5 md:space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={contentVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider"
            variants={badgeVariants}
          >
            <span className="material-symbols-outlined text-sm">stars</span>
            Limited Time Offer
          </motion.div>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-slate-900 dark:text-white"
            variants={itemVariants}
          >
            Probation &amp;{" "}
            <span className="text-primary tracking-tight">Sign-On Bonus</span>
          </motion.h1>
          <motion.div
            className="space-y-4 max-w-lg"
            variants={itemVariants}
          >
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400">
              New drivers go through a coaching and probation period designed to help you succeed. The length depends on experience and performance.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400">
              Upon successful completion, drivers are eligible for a sign-on bonus, based on:
            </p>
            <motion.ul 
              className="space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
            >
              <motion.li variants={listItemVariants} className="flex items-start gap-2" style={{ transformPerspective: 1000 }}>
                <motion.span 
                  className="material-symbols-outlined text-primary text-lg sm:text-xl mt-0.5 flex-shrink-0"
                  whileInView={{ scale: [0, 1.3, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >check_circle</motion.span>
                <span className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">Willingness to learn</span>
              </motion.li>
              <motion.li variants={listItemVariants} className="flex items-start gap-2" style={{ transformPerspective: 1000 }}>
                <motion.span 
                  className="material-symbols-outlined text-primary text-lg sm:text-xl mt-0.5 flex-shrink-0"
                  whileInView={{ scale: [0, 1.3, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >check_circle</motion.span>
                <span className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">On-time performance</span>
              </motion.li>
              <motion.li variants={listItemVariants} className="flex items-start gap-2" style={{ transformPerspective: 1000 }}>
                <motion.span 
                  className="material-symbols-outlined text-primary text-lg sm:text-xl mt-0.5 flex-shrink-0"
                  whileInView={{ scale: [0, 1.3, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >check_circle</motion.span>
                <span className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">Commitment to safety and reliability</span>
              </motion.li>
            </motion.ul>
          </motion.div>
          <motion.div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4" variants={itemVariants}>
            <button className="bg-primary hover:bg-red-700 text-white px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-lg text-sm sm:text-base font-bold transition-all flex items-center justify-center gap-2">
              Check Eligibility
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-900 dark:text-white px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-lg text-sm sm:text-base font-bold transition-all">
              View Routes
            </button>
          </motion.div>
        </motion.div>
        <motion.div
          className="h-full min-h-64 sm:min-h-80 md:min-h-96 lg:min-h-[500px] w-full bg-cover bg-center relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageVariants}
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcUJnM-bxeszpCVoXzhFixfrT3XIh2eyuudIJt2mDZY7OhzGIv0qlzVz57CcEoh_tiLP4e2bnZ6qpSEFBbT-rifRgFmbWIvcl_Ujl-hbkHFYnBT9Wl8C2Y9m7lfhYJ4mGY3CmxajDcYW-b8VPP9Yskfh9t7tKffTdABZqASN_ol59cW_lXgp_NG0m9RmKH8snzZJt7I1BN-Qr4fBlFdwuvFje8eLFDsj2haebzdmXMzdUgamMRYX9s_y9_TI37RXhXLAUP-hJ3AQE')",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-slate-100 dark:from-slate-800 via-transparent to-transparent lg:block hidden"></div>
          <div className="absolute inset-0 bg-linear-to-t from-slate-100 dark:from-slate-800 via-transparent to-transparent lg:hidden"></div>
        </motion.div>
      </div>
      </div>
    </SectionContainer>
  );
}
