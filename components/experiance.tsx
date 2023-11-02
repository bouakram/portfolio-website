"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useInViewSection } from '@/lib/hooks';
import { experiencesData } from '@/lib/data';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@/context/theme-context';
function Experiance() {
    const { ref, inView } = useInViewSection({ sectionName: "Experience" })
    const { theme } = useTheme();
    return (
        <section id="experience" ref={ref} className="mb-28">
            <SectionHeading>My experience</SectionHeading>
            <VerticalTimeline lineColor="#e5e7eb">
                {experiencesData.map((item, index) => {
                    const { ref, inView } = useInView({
                        triggerOnce: true,
                        threshold: 0.25
                    });
                    return <div ref={ref} key={index} className="vertical-timeline-element">
                        <VerticalTimelineElement
                            contentStyle={{
                                background:
                                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight:
                                    theme === "light"
                                        ? "0.4rem solid #9ca3af"
                                        : "0.4rem solid rgba(255, 255, 255, 0.5)",
                            }}
                            visible={inView}
                            date={item.date}
                            dateClassName='dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]'
                            icon={item.icon}
                            iconStyle={{
                                background:
                                    theme === "light" ? "white" : "rgb(17, 24, 39)",
                                fontSize: "1.5rem",
                            }}
                        >
                            <h3 className="font-semibold capitalize dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">{item.title}</h3>
                            <p className="font-normal !mt-0">{item.location}</p>
                            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                    </div>
                })}
            </VerticalTimeline>
        </section>
    )
}

export default Experiance