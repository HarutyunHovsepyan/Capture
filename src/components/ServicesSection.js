import React from "react";
import clock from '../img/clock.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import diaphragm from '../img/diaphragm.svg'
import home2 from '../img/home2.png'
import { motion } from "framer-motion";
import { Services,Description,Image,Cards,Card } from "../style/style";
import { imageAnim } from "../pages/animation";

const ServiceSection = () =>{
    return(
        <Services>
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <motion.img src={home2} alt="" variants={imageAnim} animate='show' initial='hidden' />
            </Image>
        </Services>
    )
}


export default ServiceSection