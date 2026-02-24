'use client';

import { motion } from 'framer-motion';
import SectionContainer from '@/app/components/layout/SectionContainer';

export default function GalleryFooterSection() {
  const leftContentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const centerLinksVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const rightSocialVariants = {
    hidden: { opacity: 0, x: 50 },
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

  const copyrightVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <footer className="relative w-full bg-[#E8E8E0] dark:bg-slate-900 border-t border-slate-200 dark:border-card-border py-12">
      <SectionContainer size="xl" noPaddingY>
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div className="text-left" variants={leftContentVariants}>
          <h4 className="text-xl font-bold italic mb-2 tracking-tighter uppercase text-slate-900 dark:text-white">
            First Team Trucking
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xs">
            An Amazon Freight Partner delivering excellence across the Midwest.
            Based in Indianapolis, IN.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400"
          variants={centerLinksVariants}
        >
          <a className="hover:text-primary" href="#terms">
            Terms of Service
          </a>
          <a className="hover:text-primary" href="#privacy">
            Privacy Policy
          </a>
          <a className="hover:text-primary" href="#contact">
            Contact Us
          </a>
        </motion.div>
        <motion.div className="flex gap-4" variants={rightSocialVariants}>
          <span className="w-10 h-10 rounded-full bg-slate-100 dark:bg-card-dark flex items-center justify-center cursor-pointer hover:bg-primary/20 hover:text-primary transition-all text-slate-700 dark:text-white">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </span>
          <span className="w-10 h-10 rounded-full bg-slate-100 dark:bg-card-dark flex items-center justify-center cursor-pointer hover:bg-primary/20 hover:text-primary transition-all text-slate-700 dark:text-white">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
            </svg>
          </span>
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-8 text-center text-xs text-slate-600 dark:text-slate-400 uppercase tracking-widest"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={copyrightVariants}
      >
        © 2024 First Team Trucking. All rights reserved. Amazon Freight Partner.
      </motion.div>
      </SectionContainer>
    </footer>
  );
}
