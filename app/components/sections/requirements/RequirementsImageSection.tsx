"use client";

import { motion } from "framer-motion";
import SectionContainer from "@/app/components/layout/SectionContainer";

const containerVariants = {
  hidden: { opacity: 0, x: -100, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
};

const imageVariants = {
  hidden: { scale: 1.2 },
  visible: {
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.3,
    },
  },
};

const textContainerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0.34, 1.56, 0.64, 1] as const,
      staggerChildren: 0.15,
    },
  },
};

const textItemVariants = {
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

export default function RequirementsImageSection() {
  return (
    <section className="relative w-full bg-[#f8efef] dark:bg-slate-900 py-16 sm:py-20 md:py-24">
      <SectionContainer size="xl" noPaddingY>
      <motion.div
        className="max-w-7xl h-70 sm:h-87.5 md:h-100 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden relative group mx-4 sm:mx-6 md:mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.img
          alt="Modern semi-truck on highway"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRR1y_r-3RGiaClNvB-xnNO295Zsdxk5VV_4_AIWB7S3mOUXHhoqHvjN4yTH-VBaHkzvSxvX7FHqRDIE5OxVvKD8VpnaOhWYIbuaTTr5CA2Li8obmpz0SfDjghKsmu-1gs8MKw6RXdOkrHcBE6zFpwZSqs5i_7QnNc0dzljUPgLbBrP1i1uHoU2vM4IXufnLI6tfGHncc0B3qlHBvoSVUb74UkfjYrI5Jf1Ss22l5gVogFOTBuDXcvsNsfobjdt4Xqqk7cdcn6Ltk"
          variants={imageVariants}
        />
        <motion.div
          className="absolute inset-0 bg-linear-to-t from-background-dark via-background-dark/20 to-transparent"
          variants={overlayVariants}
        ></motion.div>
        <motion.div
          className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 max-w-[calc(100%-2rem)] sm:max-w-md md:max-w-lg"
          variants={textContainerVariants}
        >
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-1 sm:mb-2"
            variants={textItemVariants}
          >
            Drive the Future of Freight
          </motion.p>
          <motion.p
            className="text-slate-300 text-sm sm:text-base"
            variants={textItemVariants}
          >
            As an Amazon Freight Partner, we provide consistent routes and
            modern equipment.
          </motion.p>
        </motion.div>
      </motion.div>
      </SectionContainer>
    </section>
  );
}
