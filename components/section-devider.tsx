"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
    return (
        <motion.div
            className="bg-gray-200 dark:bg-gradient-to-b dark:from-[#fba0c5] dark:to-[#a694ff] my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
        ></motion.div>
    );
}