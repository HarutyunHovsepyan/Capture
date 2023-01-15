import React,{useState} from "react";
import { motion } from "framer-motion";



const Toggle = ({children,title}) => {
    const [toggle, setToggle] = useState(false)
    return (
        <motion.div layout onClick={() => setToggle(!toggle)} style={{cursor:'pointer'}}>
            <motion.h4 layout>{title}</motion.h4>
            {toggle ? children : ""}
            <motion.div className="faq-line"></motion.div>
        </motion.div>
    )
}

export default Toggle