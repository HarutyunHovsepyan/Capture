import React from "react";
import athlete from "../img/athlete-small.png"
import theracer from "../img/theracer-small.png"
import goodtimes from "../img/goodtimes-small.png"
import { Link } from "react-router-dom";
import { Work } from "../style/style";
import { Movie } from "../style/style";

const OurWork = () => {
    return (
        <Work>
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link>
                    <img src={athlete} alt=""/>
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link>
                    <img src={theracer} alt=""/>
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link>
                    <img src={goodtimes} alt=""/>
                </Link>
            </Movie>
        </Work>

    )
}

export default OurWork