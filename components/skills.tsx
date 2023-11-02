"use client"

import { useInViewSection } from '@/lib/hooks'
import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.05 * index }
    })
}

function Skills() {
    const { ref } = useInViewSection({ sectionName: "Skills" })
    return (
        <section
            id="skills"
            ref={ref}
            className="mb-28 max-w-[53rem] text-center"
        >
            <SectionHeading>My skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {
                    skillsData.map((skill, index) => (
                        <motion.li
                            key={index}
                            className="bg-white font-medium borderBlack rounded-xl px-5 py-3  dark:bg-white/10  dark:text-white/80"
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true
                            }}
                            custom={index}
                        >
                            {skill}
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Skills