"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionContainer from "@/app/components/layout/SectionContainer";
import VideoPlayer from "@/app/components/common/VideoPlayer";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const mediaVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
};

const playButtonVariants = {
  hidden: { scale: 0, opacity: 0, rotate: -180 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
};

const playIconVariants = {
  idle: {
    scale: 1,
  },
  pulse: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: [0.45, 0.05, 0.55, 0.95] as const,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.1,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const slideVariants = {
  hidden: { opacity: 0, y: 10, scale: 1.02, filter: "blur(2px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    filter: "blur(2px)",
    transition: {
      duration: 0.35,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const contentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const contentItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const SLIDES = [
  {
    badge: "Featured Story",
    title: "Driving the Future with First Team",
    description:
      "Join our CEO as he discusses the core values that make us an industry leader and why our drivers are our most valuable asset.",
  },
  {
    badge: "Driver Experience",
    title: "Life on the Road with FTT",
    description:
      "Hear from experienced drivers about their journey with First Team Trucking and what sets us apart from the competition.",
  },
  {
    badge: "Success Stories",
    title: "From Rookie to Road Veteran",
    description:
      "Discover how our comprehensive training program and supportive culture help drivers build successful long-term careers.",
  },
];

export default function FeaturedVideoSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const slide = SLIDES[currentSlide];

  return (
    <SectionContainer size="xl" className="mt-12 md:mt-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
      <div className="bg-slate-100 dark:bg-[#151a1d] rounded-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row items-stretch h-full">
          {/* Video Container */}
          <motion.div
            className="lg:w-3/5 relative min-h-[500px] lg:min-h-[600px]"
            variants={mediaVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="absolute inset-0"
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <VideoPlayer
                  videoSrc="/Shawn.mp4"
                  title={slide.title}
                  showControls={true}
                  aspectRatio="video"
                  className="h-full"
                  onPlayStateChange={setIsPlaying}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="lg:w-2/5 p-8 md:p-12 flex flex-col justify-center min-h-[400px] lg:min-h-[600px]"
            variants={contentVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.title}
                className="mb-6 flex-grow flex flex-col justify-center"
                variants={contentContainerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.span
                  className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4"
                  variants={contentItemVariants}
                >
                  {slide.badge}
                </motion.span>
                <motion.h3
                  className="text-3xl font-black text-slate-900 dark:text-white mb-4 leading-tight"
                  variants={contentItemVariants}
                >
                  {slide.title}
                </motion.h3>
                <motion.p
                  className="text-slate-600 dark:text-slate-400 leading-relaxed"
                  variants={contentItemVariants}
                >
                  {slide.description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
            <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="flex gap-2">
                {SLIDES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`size-2 rounded-full transition-colors duration-300 ${
                      index === currentSlide
                        ? "bg-primary"
                        : "bg-slate-300 dark:bg-slate-700"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={() => setCurrentSlide(currentSlide <= 0 ? SLIDES.length - 1 : currentSlide - 1)}
                  className="size-10 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center hover:bg-primary hover:border-primary text-slate-800 dark:text-white transition-all group"
                  aria-label="Previous slide"
                >
                  <span className="material-symbols-outlined text-xl group-hover:text-white">
                    arrow_back
                  </span>
                </button>
                <button
                  onClick={() => setCurrentSlide(currentSlide >= SLIDES.length - 1 ? 0 : currentSlide + 1)}
                  className="size-10 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center hover:bg-primary hover:border-primary text-slate-800 dark:text-white transition-all group"
                  aria-label="Next slide"
                >
                  <span className="material-symbols-outlined text-xl group-hover:text-white">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
    </SectionContainer>
  );
}
