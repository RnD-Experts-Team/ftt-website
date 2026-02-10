// "use client";

// import { motion } from "framer-motion";
// import SectionContainer from "@/app/components/layout/SectionContainer";

// // Animation variants for header
// const headerVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.25, 0.1, 0.25, 1] as const,
//     },
//   },
// };

// // Container for staggered card animations
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// // Individual card animation
// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.25, 0.1, 0.25, 1] as const,
//     },
//   },
// };

// export default function FeaturesSection() {
//   const features = [
//     {
//       icon: "door_front",
//       title: "New Equipment",
//       description:
//         "Drive state-of-the-art Amazon-branded semi-trucks equipped with the latest safety technology and driver comforts.",
//     },
//     {
//       icon: "distance",
//       title: "Regional Lanes",
//       description:
//         "Stable, consistent routes originating from Indianapolis. Know your schedule ahead of time with no surprises.",
//     },
//     {
//       icon: "home_pin",
//       title: "Home Daily",
//       description:
//         "We prioritize your work-life balance. Our regional structure ensures reliable home time so you can be there for your family.",
//     },
//   ];

//   return (
//     <section className="bg-primary/10 dark:bg-charcoal">
//       <SectionContainer size="xl">
//         {/* Section Header */}
//         <motion.div
//           className="mb-16 text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={headerVariants}
//         >
//           <h2 className="font-brand text-4xl font-black italic uppercase text-slate-900 dark:text-white md:text-5xl">
//             Why Drive for FTT?
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
//             We provide the best equipment and consistent routes to ensure our
//             drivers succeed on the road and at home.
//           </p>
//         </motion.div>

//         {/* Features Grid */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 lg:px-8 xl:px-0"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           variants={containerVariants}
//         >
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/3 p-6 sm:p-7 md:p-8 transition-all hover:border-primary/50 hover:bg-slate-100 dark:hover:bg-white/5"
//             >
//               {/* Icon */}
//               <div className="mb-5 sm:mb-6 inline-flex h-12 w-12 sm:h-13 sm:w-13 md:h-14 md:w-14 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
//                 <span className="material-symbols-outlined text-2xl sm:text-[28px] md:text-3xl">
//                   {feature.icon}
//                 </span>
//               </div>

//               {/* Title */}
//               <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white uppercase font-brand italic tracking-wide">
//                 {feature.title}
//               </h3>

//               {/* Description */}
//               <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
//                 {feature.description}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </SectionContainer>
//     </section>
//   );
// }
