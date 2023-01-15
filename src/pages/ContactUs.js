import React from "react";
import { motion } from "framer-motion";
import { ContactStyle, HideContact, Title, Circle, Social, Hide } from "../style/style";
import { pageAnimation, titleAnim } from "./animation";


const ContactUs = () => {
    return (
        <ContactStyle
            variants={pageAnimation}
            initial='hidden'
            animate='show'
        >
            <Title>
                <HideContact>
                    <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
                </HideContact>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Send Us a Message</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Send an email.</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Social Media</h2>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    )
}

export default ContactUs