import React from "react";
import athlete from "../img/athlete-small.png"
import theracer from "../img/theracer-small.png"
import goodtimes from "../img/goodtimes-small.png"
import { Link } from "react-router-dom";
import { Work, Movie, Hide, Frame1, Frame2, Frame3, Frame4 } from "../style/style";
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderAnim } from "./animation";

const OurWork = () => {
    return (
        <Work variants={pageAnimation} initial='hidden' animate='show' style={{ background: "#fff" }} >
            <motion.div variants={sliderAnim}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Movie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to='/work/the-athlete'>
                    <Hide>
                        <motion.img variants={photoAnim} src={athlete} alt="" />
                    </Hide>
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to='/work/the-racer'>
                    <img src={theracer} alt="" />
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to='/work/good-times'>
                    <img src={goodtimes} alt="" />
                </Link>
            </Movie>
        </Work>
    )
}

export default OurWork