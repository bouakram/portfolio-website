"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { FaGithubSquare } from 'react-icons/fa'
import { BsLinkedin, BsArrowRight } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import Link from 'next/link'
import { useInViewSection } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'

function Intro() {
    const { ref } = useInViewSection({ sectionName: "Home" })
    const { setActiveLink, setTimeOfLastClick } = useActiveSectionContext()
    return (
        <section
            ref={ref}
            id="home"
            className="mb-28 max-w-[50rem] text-center scroll-mt-[100rem]"
        >
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                    >
                        <Image
                            src="/images/avatar.png"
                            alt="boughazi akram avatar image"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-24 w-24 p-1 rounded-full object-cover border-[0.35rem] shadow-xl hover:animate-spin"
                        />
                    </motion.div>
                </div>
            </div>
            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span>Hello, {"I'm"} </span> <span className="font-bold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">Boughazi Akram.</span> {"I'm"} a {" "}<span className="font-bold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">full-stack developer</span> with {" "}<span className="font-bold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">2 years</span> of experience. I enjoy building <span className="italic font-bold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">sites & apps</span>. My focus is{" "}
                <br />
                <span className="italic font-bold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">MERN</span>
                {" "}|{" "}
                <span className="italic font-bold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">Next JS</span>{" "}
                |{" "}
                <span className="italic font-bold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">React Native</span>.
            </motion.h1>
            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href="#contact"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    onClick={() => {
                        setActiveLink("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me here{" "}
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <a
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                    href="/CV-BoughaziAkram.pdf"
                    download
                >
                    Download CV{" "}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <a
                    className="bg-white p-4 text-gray-700 hover:text-indigo-400 dark:hover:text-indigo-400 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://www.linkedin.com/in/akram-boughazi-b3956a212/"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>

                <a
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-violet-400 dark:hover:text-violet-400 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://github.com/bouakram"
                    target="_blank"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
}

export default Intro