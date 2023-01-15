import { motion } from "framer-motion";
import React from "react";
import { pageAnimation } from "./animation";


const ContactUs = () => {
    return (
        <motion.div 
        variants={pageAnimation}
        initial='hidden'
        animate='show'
        style={{background:"#fff"}}
        >
            <h1>Contact US</h1>
        </motion.div>
    )
}

export default ContactUs