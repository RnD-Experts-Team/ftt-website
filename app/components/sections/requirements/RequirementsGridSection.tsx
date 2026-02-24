"use client";

import { motion } from "framer-motion";
import SectionContainer from "@/app/components/layout/SectionContainer";

const cardVariants = {
  hidden: (index: number) => {
    // Checkerboard pattern: even indices from left, odd from right
    const isEven = index % 2 === 0;
    return {
      opacity: 0,
      x: isEven ? -100 : 100,
      y: 30,
      rotate: isEven ? -10 : 10,
    };
  },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.7,
      delay: (index % 2) * 0.1 + Math.floor(index / 2) * 0.15,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  }),
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
      delay: 0.3,
    },
  },
};

export default function RequirementsGridSection() {
  const requirements = [
    {
      title: "CDL Class A License",
      description:
        "Required. Must be valid and issued in your state of residence with no current suspensions.",
    },
    {
      title: "21+ Years of Age",
      description:
        "All drivers must meet the minimum age requirement for interstate commercial driving.",
    },
    {
      title: "Clean MVR",
      description:
        "A clean Motor Vehicle Record with no major violations in the last 36 months.",
    },
    {
      title: "English Proficiency",
      description:
        "Must be able to read, speak, and write English to communicate effectively with dispatch and safety teams.",
    },
    {
      title: "Valid DOT Medical Card",
      description:
        "Must possess a current Medical Examiner’s Certificate (Form MCSA-5876).",
    },
    {
      title: "Drug Test Compliance",
      description:
        "Ability to pass a pre-employment drug screen and participate in random testing pools.",
    },
  ];

  return (
    <section className="relative w-full bg-[#E8E8E0] dark:bg-slate-900 py-12 sm:py-14 md:py-16">
      <SectionContainer size="xl" noPaddingY>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 sm:mb-14 md:mb-16 px-4 sm:px-6 lg:px-8 xl:px-0">
        {requirements.map((requirement, index) => (
          <motion.div
            key={index}
            className="group p-4 sm:p-5 md:p-6 lg:p-7 rounded-lg sm:rounded-xl border border-white/5 bg-card-dark flex gap-3 sm:gap-4 md:gap-5 items-start transition-colors hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={index}
            variants={cardVariants}
            whileHover={{ 
              x: 5, 
              scale: 1.02,
              transition: { duration: 0.3 } 
            }}
          >
            <motion.div
              className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg bg-primary flex items-center justify-center text-white transition-transform duration-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={iconVariants}
            >
              <span className="material-symbols-outlined font-bold text-lg sm:text-xl md:text-2xl">check</span>
            </motion.div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 text-white">
                {requirement.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {requirement.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      </SectionContainer>
    </section>
  );
}
