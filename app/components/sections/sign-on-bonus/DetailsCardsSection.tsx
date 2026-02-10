"use client";

import { motion } from "framer-motion";
import SectionContainer from "@/app/components/layout/SectionContainer";

const leftCardVariants = {
  hidden: { opacity: 0, x: -100, rotateY: -25 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
};

const rightCardVariants = {
  hidden: { opacity: 0, x: 100, rotateY: 25 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -90 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 150,
      damping: 12,
      delay: 0.3,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: 0.5 + index * 0.1,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

export default function DetailsCardsSection() {
  return (
    <section className="relative w-full bg-[#f8efef] dark:bg-slate-900 py-12 md:py-16">
      <SectionContainer size="xl" noPaddingY>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
      {/* Coaching Period Card */}
      <motion.div
        className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 md:p-8 lg:p-10 rounded-xl relative overflow-hidden group"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={leftCardVariants}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
          <span className="material-symbols-outlined text-7xl sm:text-8xl md:text-9xl">school</span>
        </div>
        <div className="relative z-10">
          <motion.div
            className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 sm:mb-5 md:mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={iconVariants}
          >
            <span className="material-symbols-outlined text-primary text-lg sm:text-xl md:text-2xl">
              psychology
            </span>
          </motion.div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
            90-Day Coaching Phase
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-5 sm:mb-6 leading-relaxed">
            Every new driver at First Team Trucking begins with a dedicated
            mentorship period. We ensure you&apos;re fully equipped with the
            skills and safety protocols required for long-term success.
          </p>
          <ul className="space-y-3">
            {[
              "One-on-one safety training",
              "Route optimization coaching",
              "Amazon Freight Tech integration",
            ].map((text, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={listItemVariants}
              >
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                {text}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Sign-On Bonus Card */}
      <motion.div
        className="bg-slate-100 dark:bg-slate-800 border border-primary/30 p-6 sm:p-7 md:p-8 lg:p-10 rounded-xl relative overflow-hidden group shadow-[0_0_30px_rgba(235,25,32,0.1)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={rightCardVariants}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
          <span className="material-symbols-outlined text-7xl sm:text-8xl md:text-9xl">payments</span>
        </div>
        <div className="relative z-10">
          <motion.div
            className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 sm:mb-5 md:mb-6 border border-primary/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={iconVariants}
          >
            <span className="material-symbols-outlined text-primary text-lg sm:text-xl md:text-2xl">
              card_giftcard
            </span>
          </motion.div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
            Sign-On Bonus Reward
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-5 sm:mb-6 leading-relaxed">
            We value your commitment to excellence. Upon successful completion
            of the coaching period and meeting performance metrics, you become
            eligible for our competitive sign-on reward.
          </p>
          <div className="bg-white dark:bg-slate-900 bg-opacity-50 dark:bg-opacity-50 border border-slate-200 dark:border-slate-700 p-3 sm:p-4 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div>
              <span className="text-xs uppercase text-slate-500 font-bold tracking-widest">
                Total Reward
              </span>
              <div className="text-2xl sm:text-3xl font-black text-primary">$3,000.00</div>
            </div>
            <div className="sm:text-right">
              <span className="text-xs uppercase text-slate-500 font-bold tracking-widest">
                Paid In
              </span>
              <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">3 Installments</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    </SectionContainer>
    </section>
  );
}
