"use client"

import Image from 'next/image'
import { BsEye, BsGithub } from 'react-icons/bs'
import { projectsData } from '@/lib/data'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInViewSection } from '@/lib/hooks'

type ProjectProps = typeof projectsData[number]

function Project({ title, description, tags, imageUrl }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
    return (
        <motion.div
            ref={ref}
            style={{
                opacity: opacityProgress,
                scale: scaleProgress,
            }}
            className='group mb-3 sm:mb-8 last:mb-0'
        >
            <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[24rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col items-center justify-center sm:items-start sm:justify-start h-full sm:group-even:ml-[18rem]'>
                    <h3 className='text-2xl font-semibold'>{title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-700 dark:text-gray-200 text-center sm:text-start text-clip'>{description}</p>
                    <ul className='flex flex-wrap items-center justify-center sm:items-start sm:justify-start mt-4 sm:mt-auto gap-2'>
                        {tags.map((tag, index) => (
                            <li className='bg-black/70 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white font-bold rounded-full dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]' key={index}>{tag}</li>
                        ))}
                    </ul>
                    <div className='flex gap-2 mt-4 items-center'>
                        <a
                            className="group bg-gray-900 text-white px-7 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                            href="/boughaziakramCV.pdf"
                            download
                        >
                            Open{" "}
                            <BsEye className="opacity-60 transition" />
                        </a>
                        <a
                            className="group bg-white px-7 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                            href="/boughaziakramCV.pdf"
                            download
                        >
                            Source{" "}
                            <BsGithub className="opacity-60 transition" />
                        </a>
                    </div>
                </div>
                <Image src={imageUrl} alt="Projects i worked" quality={95} className='hidden sm:block absolute top-8 -right-52 w-[28.25rem] h-full rounded-lg shadow-2xl group-even:right-[initial] group-even:-left-52 group-hover:scale-[1.05] group-hover:-translate-x-6 group-hover:-translate-y-6 group-even:group-hover:translate-x-6 group-even:group-hover:-translate-y-6 transition' />
            </section>
        </motion.div>
    )
}

export default Project