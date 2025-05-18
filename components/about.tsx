"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useInViewSection } from "@/lib/hooks";

export default function About() {
  const { ref } = useInViewSection({ sectionName: "About" })
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >

      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi, I’m <span className="font-medium dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">Boughazi Akram</span> a developer from Algeria with a passion for <span className="font-medium dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">solving problems</span> and turning ideas into real, usable products. I love building <span className="font-medium dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">mobile apps</span> and <span className="font-medium dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">websites</span>, and I’m always exploring <span className="font-medium dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">new technologies</span>, tools, and concepts to keep learning and improving.

        In my spare time, I dive into <span className="font-medium dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">research</span>, especially in areas like <span className="font-medium dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">cybersecurity</span> and <span className="font-medium dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">blockchain</span>, which I find both challenging and inspiring. I{"'"}m also driven by <span className="font-medium dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">collaboration</span> I enjoy meeting like-minded people, sharing <span className="font-medium dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">knowledge</span>, and <span className="font-medium dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">working together</span>to create smart solutions to complex problems.
      </p>
    </motion.section>
  );
}
