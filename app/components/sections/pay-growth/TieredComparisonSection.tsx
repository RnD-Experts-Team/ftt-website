// "use client";

// import { motion } from "framer-motion";
// import SectionContainer from "@/app/components/layout/SectionContainer";

// const headerVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: [0.34, 1.56, 0.64, 1] as const,
//     },
//   },
// };

// const tierVariants = {
//   hidden: {
//     opacity: 0,
//     y: 80,
//     scale: 0.9,
//   },
//   visible: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     scale: index === 1 ? 1.05 : 1,
//     transition: {
//       duration: 0.7,
//       delay: index * 0.2,
//       ease: [0.34, 1.56, 0.64, 1] as const,
//     },
//   }),
// };

// const badgeVariants = {
//   hidden: { opacity: 0, y: -20, scale: 0 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: "spring" as const,
//       stiffness: 200,
//       damping: 15,
//       delay: 0.4,
//     },
//   },
// };

// const featureVariants = {
//   hidden: { opacity: 0, x: -20 },
//   visible: (index: number) => ({
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.4,
//       delay: 0.6 + index * 0.1,
//       ease: [0.25, 0.1, 0.25, 1] as const,
//     },
//   }),
// };

// export default function TieredComparisonSection() {
//   const tiers = [
//     {
//       badge: null,
//       category: "Baseline",
//       title: "Entry Level",
//       features: [
//         "Competitive Hourly Rate",
//         "Standard Health Benefits",
//         "401(k) Matching",
//       ],
//       buttonText: "Get Started",
//       buttonStyle: "border border-white/20 hover:bg-white/5",
//       highlight: false,
//       scale: false,
//     },
//     {
//       badge: "Most Popular",
//       category: "Top Performer",
//       title: "Elite Class",
//       features: [
//         "Maximum Available Hours",
//         "Performance Bonuses",
//         "Priority Route Selection",
//         "Lead Driver Opportunities",
//       ],
//       buttonText: "Apply Now",
//       buttonStyle: "bg-primary hover:bg-red-700 shadow-lg shadow-primary/20",
//       highlight: true,
//       scale: true,
//     },
//     {
//       badge: null,
//       category: "Veteran",
//       title: "Senior Driver",
//       features: [
//         "Loyalty Pay Increases",
//         "Dedicated Routes",
//         "Trainer Incentives",
//       ],
//       buttonText: "Learn More",
//       buttonStyle: "border border-white/20 hover:bg-white/5",
//       highlight: false,
//       scale: false,
//     },
//   ];

//   return (
//     <SectionContainer size="xl" className="py-16 sm:py-20 md:py-24 bg-white rounded-3xl dark:bg-slate-900 mb-12 sm:mb-14 md:mb-16 ">
//       <motion.div
//         className="text-center mb-12 sm:mb-14 md:mb-16 border-0 rounded-3xl px-4 sm:px-6 lg:px-8 xl:px-0"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={headerVariants}
//       >
//         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white uppercase mb-3 sm:mb-4 font-black tracking-tight">
//           Choose Your Performance Tier
//         </h2>
//         <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400">Higher standards unlock higher potential.</p>
//       </motion.div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch px-4 sm:px-6 lg:px-8 xl:px-0">
//         {tiers.map((tier, index) => (
//           <motion.div
//             key={index}
//             className={`bg-slate-100 dark:bg-slate-800 p-6 sm:p-7 md:p-8 rounded-xl flex flex-col relative ${
//               tier.highlight
//                 ? "border-2 border-primary shadow-[0_0_30px_rgba(235,25,32,0.2)] z-20"
//                 : "border border-slate-200 dark:border-slate-800"
//             }`}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             custom={index}
//             variants={tierVariants}
//             whileHover={{
//               y: -10,
//               transition: { duration: 0.3 },
//             }}
//           >
//             {tier.badge && (
//               <motion.div
//                 className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 sm:px-4 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={badgeVariants}
//               >
//                 {tier.badge}
//               </motion.div>
//             )}
//             <div className="mb-6 sm:mb-7 md:mb-8">
//               <h3
//                 className={`text-sm sm:text-base md:text-lg font-bold uppercase tracking-widest mb-1 ${
//                   tier.highlight ? "text-primary" : "text-slate-600 dark:text-slate-400"
//                 }`}
//               >
//                 {tier.category}
//               </h3>
//               <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{tier.title}</div>
//             </div>
//             <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-9 md:mb-10 grow">
//               {tier.features.map((feature, fIndex) => (
//                 <motion.li
//                   key={fIndex}
//                   className={`flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${
//                     tier.highlight
//                       ? "text-slate-900 dark:text-white font-semibold"
//                       : "text-slate-600 dark:text-slate-300"
//                   }`}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   custom={fIndex}
//                   variants={featureVariants}
//                 >
//                   <span
//                     className={`material-symbols-outlined text-lg sm:text-xl ${
//                       tier.highlight ? "text-primary" : "text-green-500"
//                     }`}
//                   >
//                     {tier.highlight ? "verified" : "check_circle"}
//                   </span>
//                   {feature}
//                 </motion.li>
//               ))}
//             </ul>
//             <motion.button
//               className={`w-full py-2.5 sm:py-3 md:py-3.5 rounded-lg text-sm sm:text-base text-slate-900 dark:text-white font-bold transition-colors ${tier.buttonStyle}`}
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {tier.buttonText}
//             </motion.button>
//           </motion.div>
//         ))}
//       </div>
//     </SectionContainer>
//   );
// }
