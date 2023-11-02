import React from "react";

export default function Footer() {
    return (
        <footer className="mb-10 px-4 text-center text-gray-500">
            <small className="mb-2 block font-semibold text-xs dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">
                &copy; 2023 Boughazi Akram. All rights reserved.
            </small>
            {/* <p className="text-xs">
                <span className="font-semibold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]">About this website:</span> built with
                React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
                Framer Motion, React Email & Resend.
            </p> */}
        </footer>
    );
}