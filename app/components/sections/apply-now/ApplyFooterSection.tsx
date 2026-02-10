'use client';

import { motion } from 'framer-motion';
import SectionContainer from '@/app/components/layout/SectionContainer';

const socialLinks = [
  { label: "Facebook", icon: "public" },
  { label: "LinkedIn", icon: "work" },
];

export default function ApplyFooterSection() {
  const columnVariants = (delay: number) => ({
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: 15,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.34, 1.56, 0.64, 1] as const,
        staggerChildren: 0.08,
      },
    },
  });

  const itemVariants = {
    hidden: { 
      opacity: 0,
      x: -15,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -90,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 12,
      },
    },
  };

  const socialVariants = {
    hidden: { 
      scale: 0,
      rotate: 180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 150,
        damping: 10,
      },
    },
  };

  const bottomVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section className="relative w-full bg-[#f8efef] dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-16">
      <SectionContainer size="xl" noPaddingY>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & About */}
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={columnVariants(0)}
            style={{ perspective: 1000 }}
          >
            <motion.div className="flex items-center gap-3" variants={itemVariants}>
              <motion.div className="text-primary" variants={iconVariants}>
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </motion.div>
              <span className="text-xl font-black tracking-tighter uppercase text-slate-900 dark:text-white">
                First Team Trucking
              </span>
            </motion.div>
            <motion.p 
              className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xs"
              variants={itemVariants}
            >
              Dedicated to efficiency, safety, and our drivers. We are proud to
              be an official Amazon Freight Partner operating out of Indianapolis.
            </motion.p>
            <motion.div className="flex gap-4" variants={itemVariants}>
              {socialLinks.map((link, index) => (
                <motion.button
                  key={link.label}
                  aria-label={link.label}
                  className="w-10 h-10 rounded bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-steel-gray hover:text-primary hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
                  variants={socialVariants}
                  custom={index}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="material-symbols-outlined text-lg">
                    {link.icon}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={columnVariants(0.1)}
            style={{ perspective: 1000 }}
          >
            <motion.h4 
              className="text-slate-900 dark:text-white text-xs font-black uppercase tracking-[0.2em]"
              variants={itemVariants}
            >
              Contact Recruitment
            </motion.h4>
            <div className="flex flex-col gap-4">
              <motion.div className="flex items-start gap-3" variants={itemVariants}>
                <motion.span 
                  className="material-symbols-outlined text-primary text-xl"
                  variants={iconVariants}
                >
                  phone_in_talk
                </motion.span>
                <div>
                  <p className="text-slate-900 dark:text-white text-sm font-bold">
                    (555) 000-0000
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-xs">
                    Mon-Fri, 9am-5pm EST
                  </p>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-3" variants={itemVariants}>
                <motion.span 
                  className="material-symbols-outlined text-primary text-xl"
                  variants={iconVariants}
                >
                  mail
                </motion.span>
                <div>
                  <p className="text-slate-900 dark:text-white text-sm font-bold">
                    recruiting@firstteamtrucking.com
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-xs">
                    Typical response within 24h
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={columnVariants(0.2)}
            style={{ perspective: 1000 }}
          >
            <motion.h4 
              className="text-slate-900 dark:text-white text-xs font-black uppercase tracking-[0.2em]"
              variants={itemVariants}
            >
              Hub Location
            </motion.h4>
            <div className="flex flex-col gap-4">
              <motion.div className="flex items-start gap-3" variants={itemVariants}>
                <motion.span 
                  className="material-symbols-outlined text-primary text-xl"
                  variants={iconVariants}
                >
                  location_on
                </motion.span>
                <div>
                  <p className="text-slate-900 dark:text-white text-sm font-bold">
                    Indianapolis Logistics Hub
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Indianapolis, IN 46241
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="mt-2 h-24 w-full rounded-lg bg-slate-100 dark:bg-white/5 overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  alt="Stylized map showing Indianapolis location"
                  className="w-full h-full object-cover opacity-50 contrast-125 grayscale"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgLLdJXIrqzyjeonIcbEAcWDweEHWeX3H46bpXlDTzpnp8Lb6piJ6Z-nB8IXx3Fq_pcwRZKD0ubjLfzk6FhykUFJi5j0VBob8mVBzkM-aLey5mi650AgIdJXxJA8Vj8zRndbBJrICUIyo0qKVI7Sf6nzKiHhcl6zq4SfLfQvRnl7FYSsIrqdPLoV1Pw7QuwSjA72JoZcP7MCCtax9pyP-6m3tHjzQfwBnsTCpa-wDMylDRtoX5kFe7vjkPr7ihuU-alze3-BH3AyM"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={columnVariants(0.3)}
            style={{ perspective: 1000 }}
          >
            <motion.h4 
              className="text-slate-900 dark:text-white text-xs font-black uppercase tracking-[0.2em]"
              variants={itemVariants}
            >
              Quick Navigation
            </motion.h4>
            <nav className="flex flex-col gap-3">
              <motion.a
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors"
                href="#privacy"
                variants={itemVariants}
                whileHover={{ x: 5, color: "rgb(239, 68, 68)" }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors"
                href="#terms"
                variants={itemVariants}
                whileHover={{ x: 5, color: "rgb(239, 68, 68)" }}
              >
                Terms of Service
              </motion.a>
              <motion.a
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors"
                href="#safety"
                variants={itemVariants}
                whileHover={{ x: 5, color: "rgb(239, 68, 68)" }}
              >
                Safety Standards
              </motion.a>
              <motion.a
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors"
                href="/benefits"
                variants={itemVariants}
                whileHover={{ x: 5, color: "rgb(239, 68, 68)" }}
              >
                Driver Benefits
              </motion.a>
              <motion.a
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors"
                href="#portal"
                variants={itemVariants}
                whileHover={{ x: 5, color: "rgb(239, 68, 68)" }}
              >
                Employee Portal
              </motion.a>
            </nav>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="pt-10 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={bottomVariants}
        >
          <p className="text-slate-600 dark:text-slate-400 text-xs font-medium">
            © 2024 First Team Trucking. All rights reserved.
            <span className="mx-2 text-slate-400/40 dark:text-white/10">|</span>
            An Independent Amazon Freight Partner.
          </p>
          <div className="flex items-center gap-6 opacity-30 grayscale brightness-200">
            <img
              alt="Amazon Freight Partner Logo"
              className="h-6 object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsiZxO7hUvMJVNljcypbPsTMo3ilhUYtQj0hMeOofirsnqwmo8F7ly-IAjg-kCmuOsaD_uGHLxMUcA8PSq60tH6eePb6UlDWOfs57UKkmMY8TKYqF5RrVPNuY-tE8hfijvBEERsgLkZU_BKPhQXuYHofPX-GRVho4VCWOHl-vXNtX528wlg2xrlv9iMwKN0IOpoLJ7rzo_p3s8-dr-VywGr4qvMET3HHrLgxkIHLbe-kaM_RGWRhmbeqP7f0xjad_X5S6i8GFyWYU"
            />
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}
