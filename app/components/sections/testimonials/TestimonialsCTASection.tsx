"use client";

import { motion } from "framer-motion";
import SectionContainer from "@/app/components/layout/SectionContainer";

const ctaVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function TestimonialsCTASection() {
  return (
    <SectionContainer size="xl" className="mt-16 md:mt-24">
      <motion.div
        className="text-center border-t border-slate-200 dark:border-slate-800 pt-12 md:pt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={ctaVariants}
      >
      <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">
        Ready to Join the Team?
      </h2>
      <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-10 text-lg">
        Experience the First Team Trucking difference today. Competitive pay,
        modern equipment, and a culture that cares.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-primary/20">
          Apply Now
        </button>
        <button className="w-full sm:w-auto px-8 py-4 border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
          Learn More
        </button>
      </div>
      </motion.div>
    </SectionContainer>
  );
}
