import { useActiveSectionContext } from "@/context/active-section-context"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import type { SectionName } from "./types"

type useInViewSectionType = {
    sectionName: SectionName
}

export function useInViewSection({sectionName} : useInViewSectionType, threshold = 0.25){
    const { ref, inView } = useInView({
        threshold
    })
    const { setActiveLink, timeOfLastClick } = useActiveSectionContext()
    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveLink(sectionName)
        }
    }, [inView, sectionName, setActiveLink, timeOfLastClick])

    return {ref, inView}
}