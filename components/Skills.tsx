"use client";

import TechCard from "./TechCard";
import { motion } from "framer-motion";

const techCardsItems = [
  {
    name: "Figma",
    description: "Design Tool",
    imageUrl: "/imgs/logos/figma-logo.svg",
    bgColor: "bg-[#0ACF83]/20",
  },
  {
    name: "TypeScript",
    description: "JavaScript but better",
    imageUrl: "/imgs/logos/typescript.svg",
    bgColor: "bg-[#3178C6]/20",
  },
  {
    name: "React",
    description: "JavaScript Library",
    imageUrl: "/imgs/logos/react.svg",
    bgColor: "bg-[#61DAFB]/20",
  },
  {
    name: "NextJS",
    description: "React framework",
    imageUrl: "/imgs/logos/nextjs.svg",
    bgColor: "bg-[#333]/90",
  },
  {
    name: "Tailwind",
    description: "CSS framework",
    imageUrl: "/imgs/logos/tailwind.svg",
    bgColor: "bg-[#0EA5E9]/20",
  },
  {
    name: "Git",
    description: "Version control",
    imageUrl: "/imgs/logos/git.svg",
    bgColor: "bg-[#F1502F]/20",
  },
  {
    name: "Supabase",
    description: "Backend tool",
    imageUrl: "/imgs/logos/supabase.svg",
    bgColor: "bg-[#3ECF8E]/20",
  },
  {
    name: "Appwrite",
    description: "Backend tool",
    imageUrl: "/imgs/logos/appwrite.svg",
    bgColor: "bg-[#F02D65]/20",
  },
];

const Skills: React.FC  = () => {
  return (
    <div className="relative z-10 py-16 sm:py-24 m-5" id="about">
      <div className="space-y-4 mb-10 ">
        <motion.h1
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200"
        >
          Current technologies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-dark-200/70 dark:text-stone-200/70"
        >
          I&apos;m proficient in a range of modern technologies that empower me
          to build highly functional solutions. These are some of my main
          technologies.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4"
      >
        {techCardsItems.map((cardItem) => (
          <TechCard key={cardItem.name} cardInfo={cardItem} />
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
