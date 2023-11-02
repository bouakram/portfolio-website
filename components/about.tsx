"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
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
                {"I'm"} a passionate and adaptable <span className="font-medium dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">full-stack developer</span> with a strong foundation in <span className="font-medium dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">computer science</span>. {" "}
                My academic background in computer science has ignited my love for programming. {"I've"} honed my expertise in the <span className="font-medium dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">MERN</span> stack, focusing on <span className="font-medium dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">React</span>, <span className="font-medium dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">Next.js</span>, <span className="font-medium dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">Node.js</span>, and <span className="font-medium dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">MongoDB</span>.{" "}
                My proficiency extends to <span className="italic font-medium">TypeScript</span> and <span className="italic font-medium">Prisma</span>, allowing me to craft robust <span className="italic font-medium">back-end APIs</span> and create engaging <span className="italic font-medium">front-end</span> experiences.
            </p>

            <p>
                My <span className="font-medium dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">freelancing</span> journey has exposed me to diverse projects, and my passion for programming remains at the core of who I am.{" "}
                I thrive on <span className="italic font-medium dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">challenges</span> and <span className="italic font-medium dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">constant growth</span>. Whether {"it's"} diving into new tech stacks, tackling intricate problems, or staying up-to-date with the latest trends, {"I'm"} always eager to expand my horizons.{" "} My adaptability shines as I seamlessly transition between tasks, whether working <span className="italic font-medium dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">independently</span> or within a <span className="italic font-medium dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">team</span>. My unwavering commitment to <span className="italic font-medium">delivering top-notch results</span> remains a constant driving force in my journey as a developer.
            </p>
        </motion.section>
    );
}