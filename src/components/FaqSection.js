import React from "react";
import { Faq } from "../style/style";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
    return (
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title={'How Do I Start?'}>
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
                            totam.
                        </p>
                    </div>
                </div>
            </Toggle>
            <Toggle title={'Daily Schedule'}>
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
                            totam.
                        </p>
                    </div>
                </div>
            </Toggle>
            <Toggle title={'Different Payment Methods'}>
           <div className="question">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
                        totam.
                    </p>
                </div>
            </div>
            </Toggle>
            <Toggle title={'What Products do you offer.'}>
            <div className="question">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
                        totam.
                    </p>
                </div>
            </div>
            </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

export default FaqSection