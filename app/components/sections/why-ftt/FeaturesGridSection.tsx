"use client";

import { motion } from "framer-motion";
import SectionContainer from "@/app/components/layout/SectionContainer";

const cardVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -80 : 80,
    rotateY: index % 2 === 0 ? -15 : 15,
  }),
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.7,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: 180 },
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

export default function FeaturesGridSection() {
  const features = [
    {
      icon: "payments",
      title: "Performance-Based Pay",
      description:
        "Earn top-tier wages with transparent incentive structures for safety, reliability, and fuel efficiency. Your hard work directly impacts your paycheck.",
    },
    {
      icon: "verified_user",
      title: "New Equipment",
      description:
        "Drive with confidence in late-model tractors equipped with the latest safety technology, collision mitigation, and driver comfort packages.",
    },
    {
      icon: "front_loader",
      title: "100% No-Touch Freight",
      description:
        "Save your energy for the road. We handle all loading and unloading. You focus on safe transport and timely deliveries across the network.",
    },
    {
      icon: "partner_reports",
      title: "Amazon Freight Partner",
      description:
        "Benefit from the consistent volume and high-tech efficiency of the Amazon network. Enjoy year-round work stability and cutting-edge logistics support.",
    },
    {
      icon: "home_work",
      title: "Work-Life Balance",
      description:
        "We value your time at home. Enjoy consistent, predictable schedules and reliable home time that lets you be there for the moments that matter.",
    },
    {
      icon: "support_agent",
      title: "24/7 Driver Support",
      description:
        "You're never alone on the road. Our dispatch and maintenance support teams are available around the clock to assist with any situation.",
    },
  ];

  return (
    <SectionContainer size="xl" noPaddingY className="mb-16 md:mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="group border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 p-8 rounded-xl hover:border-primary transition-colors duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={cardVariants}
          custom={index}
          whileHover={{ 
            scale: 1.05,
            rotateY: index % 2 === 0 ? 2 : -2,
            transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const } 
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div 
            className="mb-6 inline-flex p-3 rounded-lg bg-primary/10 text-primary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={iconVariants}
          >
            <span className="material-symbols-outlined text-4xl">
              {feature.icon}
            </span>
          </motion.div>
          <h3 className="font-brand text-2xl font-bold mb-3 tracking-wide">
            {feature.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {feature.description}
          </p>
        </motion.div>
      ))}
      </div>
    </SectionContainer>
  );
}
