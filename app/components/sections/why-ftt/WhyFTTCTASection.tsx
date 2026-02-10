// "use client";

// import { motion } from "framer-motion";
// import SectionContainer from "@/app/components/layout/SectionContainer";

// const containerVariants = {
//   hidden: { opacity: 0, y: 100, scale: 0.9 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.8,
//       ease: [0.34, 1.56, 0.64, 1] as const,
//       staggerChildren: 0.12,
//       delayChildren: 0.3,
//     },
//   },
// };

// const glowVariants = {
//   initial: {
//     opacity: 0.1,
//     scale: 1,
//     rotate: 0,
//   },
//   animate: {
//     opacity: [0.1, 0.25, 0.1],
//     scale: [1, 1.3, 1],
//     rotate: [0, 180, 360],
//     transition: {
//       duration: 8,
//       repeat: Infinity,
//       ease: [0.45, 0.05, 0.55, 0.95] as const,
//     },
//   },
// };

// const contentVariants = {
//   hidden: { opacity: 0, y: 30, scale: 0.95 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.6,
//       ease: [0.34, 1.56, 0.64, 1] as const,
//     },
//   },
// };

// const buttonContainerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const buttonVariants = {
//   hidden: { opacity: 0, y: 20, rotateX: -45 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     rotateX: 0,
//     transition: {
//       duration: 0.5,
//       ease: [0.34, 1.56, 0.64, 1] as const,
//     },
//   },
// };

// export default function WhyFTTCTASection() {
//   return (
//     <section className="relative w-full bg-[#F7E2E3] dark:bg-slate-900 py-16 md:py-20">
//       <SectionContainer size="xl" noPaddingY>
//       <motion.div
//         className="p-8 md:p-12 lg:p-16 rounded-3xl bg-primary relative overflow-hidden flex flex-col items-center text-center text-slate-900 dark:text-white"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={containerVariants}
//       >
//       <motion.div
//         className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent"
//         variants={glowVariants}
//         initial="initial"
//         animate="animate"
//       ></motion.div>
//       <motion.h2
//         className="font-brand text-4xl md:text-5xl font-black mb-6 relative z-10 text-slate-900 dark:text-white"
//         variants={contentVariants}
//       >
//         Ready to Join the Team?
//       </motion.h2>
//       <motion.p
//         className="text-slate-900/90 dark:text-white/90 text-lg mb-8 max-w-xl relative z-10"
//         variants={contentVariants}
//       >
//         Start your career with First Team Trucking today. We&apos;re looking for
//         safe, professional drivers to grow with us.
//       </motion.p>
//       <motion.div
//         className="flex flex-wrap justify-center gap-4 relative z-10"
//         variants={buttonContainerVariants}
//       >
//         <motion.button
//           className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl uppercase tracking-wider"
//           variants={buttonVariants}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Apply Now
//         </motion.button>
//         <motion.button
//           className="bg-black/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-xl font-bold text-lg hover:bg-black/30 transition-colors uppercase tracking-wider"
//           variants={buttonVariants}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           View Openings
//         </motion.button>
//       </motion.div>
//       </motion.div>
//       </SectionContainer>
//     </section>
//   );
// }
