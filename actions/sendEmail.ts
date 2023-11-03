"use server"

import React from 'react'
import ContactFormEmail from "@/email/contact-form-email"
import { Resend } from "resend"

export const sendEmail = async (formData: FormData) => {
    const resend = new Resend(process.env.RESEND_API_KEY)

    const sender = formData.get('senderEmail')
    const message = formData.get('message')

    if(!sender || typeof sender !== 'string'){
        return {
            error: "invalid email address"
        }
    }
    if(!message || typeof message !== 'string'){
        return {
            error: "invalid message"
        }
    }
    let data
    try {
        data = await resend.emails.send({
            from: `Contacted from <onboarding@resend.dev>`,
            to: 'boughazi.akram.97@gmail.com',
            subject: 'portfolio contact me message',
            reply_to: sender as string,
            // text: message as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: sender as string,
            }),
        })  
    } catch (error: unknown) {
            console.log(error)
            error = "Something went wrong";
            return error
        }
    return {data};
}