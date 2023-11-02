"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useInViewSection } from '@/lib/hooks'

function Projects() {
    const { ref } = useInViewSection({ sectionName: "Projects" })
    return (
        <section
            ref={ref}
            id="projects"
            className='mb-28'
        >
            <SectionHeading>My projects</SectionHeading>
            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects