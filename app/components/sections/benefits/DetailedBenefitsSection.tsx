"use client";

import { motion, Variants } from "framer-motion";
import SectionContainer from "@/app/components/layout/SectionContainer";

/* ------------------ Animations (TS-safe) ------------------ */

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/* ------------------ Component ------------------ */

export default function DetailedBenefitsSection() {
  const primaryPerks = [
    {
      icon: "medical_services",
      title: "Comprehensive Insurance",
      description:
        "Full medical, dental, and vision coverage starting on your first month of employment.",
    },
    {
      icon: "child_care",
      title: "Childcare Assistance",
      description:
        "Exclusive childcare support programs designed for our driving teams.",
    },
    {
      icon: "savings",
      title: "Retirement Planning",
      description:
        "401(k) with company matching contributions up to 4%.",
    },
  ];

  const highlights = [
    {
      title: "Weekly Direct Deposit",
      description: "Paid every Friday, no exceptions.",
    },
    {
      title: "Home Every Day",
      description: "Local and regional routes only.",
    },
    {
      title: "New Equipment",
      description: "Late-model Day Cab tractors with modern safety tech.",
    },
    {
      title: "Referral Bonus",
      description: "Earn $1,500 for every qualified referral.",
    },
  ];

  return (
    <section className="relative w-full bg-[#f8efef] dark:bg-slate-900 py-12 sm:py-16 md:py-20">
      <SectionContainer size="xl" noPaddingY className="overflow-x-hidden">
      {/* Header */}
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8 sm:mb-10 md:mb-12 max-w-2xl px-4 sm:px-6 lg:px-8 xl:px-0"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
          Driver Benefits & Compensation
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          We believe our drivers are our most valuable asset. Our benefits are
          designed to support you both on and off the road.
        </p>
      </motion.div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 px-4 sm:px-6 lg:px-8 xl:px-0">
        {/* Left Column – Perks */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-5"
        >
          {primaryPerks.map((perk, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="
                w-full
                flex
                flex-col
                sm:flex-row
                gap-3
                sm:gap-4
                p-4
                sm:p-5
                md:p-6
                rounded-lg
                sm:rounded-xl
                bg-white
                dark:bg-card-dark
                border
                border-slate-200
                dark:border-white/10
              "
            >
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">
                  {perk.icon}
                </span>
              </div>

              {/* Text */}
              <div className="min-w-0">
                <h4 className="font-semibold text-base sm:text-lg md:text-xl text-slate-900 dark:text-white wrap-break-word mb-1">
                  {perk.title}
                </h4>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed wrap-break-word">
                  {perk.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Column – Highlights */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            w-full
            p-5
            sm:p-6
            md:p-8
            rounded-xl
            sm:rounded-2xl
            bg-white
            dark:bg-card-dark
            border
            border-slate-200
            dark:border-white/10
          "
        >
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-5 sm:mb-6 text-slate-900 dark:text-white">
            Plan Highlights
          </h4>

          <ul className="space-y-4 sm:space-y-5">
            {highlights.map((item, index) => (
              <motion.li
                key={index}
                variants={fadeUp}
                className="flex gap-3"
              >
                <span className="material-symbols-outlined text-primary text-xl sm:text-2xl shrink-0">
                  check_circle
                </span>
                <div className="min-w-0">
                  <p className="font-medium text-sm sm:text-base text-slate-900 dark:text-white wrap-break-word">
                    {item.title}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 wrap-break-word">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
      </SectionContainer>
    </section>
  );
}
