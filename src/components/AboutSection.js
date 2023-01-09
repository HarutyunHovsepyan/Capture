import React from "react";
import home1 from '../img/home1.png'
import { About,Description,Hide,Image } from "../style/style";


const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We Work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>Contact us for photography or videography ideas that you have.
                    We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </Description>
                <Image>
                    <img src={home1} alt='photographer' />
                </Image>
        </About>
    )
}



export default AboutSection