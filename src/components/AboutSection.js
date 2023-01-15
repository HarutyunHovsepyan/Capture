import React from "react";
import home1 from '../img/home1.png'
import { About, Description, Hide, Image } from "../style/style";
import { motion } from "framer-motion";
import { titleAnim,fade,photoAnim } from "../pages/animation";
import Wave from "./Wave";

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>We Work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </div>
                    <motion.p variants={fade}>Contact us for photography or videography ideas that you have.
                        We have professionals with amazing skills.</motion.p>
                    <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt='photographer'  />
            </Image>
            <Wave />
        </About> 
    )
}



export default AboutSection