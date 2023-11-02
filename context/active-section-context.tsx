"use client"

import type { SectionName } from "@/lib/types"
import React, { createContext, useContext, useState } from "react"

type ActiveSectionContextProviderProps = {
    children: React.ReactNode
}
type ActiveSectionContextType = {
    activeLink: SectionName,
    setActiveLink: React.Dispatch<React.SetStateAction<SectionName>>,
    timeOfLastClick: number,
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>,
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

function ActivSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
    const [activeLink, setActiveLink] = useState<SectionName>('Home')
    const [timeOfLastClick, setTimeOfLastClick] = useState(0)
    return <ActiveSectionContext.Provider
        value={{
            activeLink,
            setActiveLink,
            timeOfLastClick,
            setTimeOfLastClick
        }}
    >{children}</ActiveSectionContext.Provider>
}

export default ActivSectionContextProvider

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext)

    if (context === null) {
        throw new Error("useActiveSectionContext must be called within an ActiveSectionContextProvider")
    }

    return context
}