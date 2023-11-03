"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { useInViewSection } from '@/lib/hooks'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { sendEmail } from '@/actions/sendEmail'
import { useFormStatus } from 'react-dom'
import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast'

function Contact() {
    const { ref } = useInViewSection({ sectionName: "Contact" })
    const { pending } = useFormStatus()
    return (
        <motion.section
            ref={ref}
            id='contact'
            className='mb-28 w-[min(100%,38rem)] text-center'
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            viewport={{
                once: true
            }}
        >
            <SectionHeading>Contact me</SectionHeading>
            <p className="text-gray-700 -mt-6 dark:text-white/80">please contact me directly at <a className="underline dark:border-white/80 dark:border-b-2 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#fba0c5] dark:to-[#a694ff]" href="mailto:boughazi.akram.97@gmail.com">boughazi.akram.97@gmail.com</a> or through this form:</p>
            <form
                className="mt-10 flex flex-col dark:text-black"
                action={async (formData) => {
                    const error = await sendEmail(formData)
                    if (error) {
                        return toast.error("somthing went wrong");
                    }
                    toast.success('your message has been sent');
                }}
            >
                <input
                    className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email"
                />
                <textarea
                    className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />
                <SubmitBtn />
            </form>
        </motion.section>
    )
}

export default Contact