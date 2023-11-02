import React from 'react'
import {
    Body,
    Heading,
    Container,
    Head,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailType = {
    message: string,
    senderEmail: string
}

function ContactFormEmail({ message, senderEmail }: ContactFormEmailType) {
    return (
        <Html>
            <Head />
            <Preview>New message from your portfolio site</Preview>
            <Tailwind>
                <Body className="bg-gray-100 text-black">
                    <Container>
                        <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                            <Heading className="leading-tight">
                                You received the following message from the contact form
                            </Heading>
                            <Text>{message}</Text>
                            <Hr />
                            <Text>The {"sender's"} email is: {senderEmail}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}

export default ContactFormEmail