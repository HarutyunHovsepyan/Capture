import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Line, NavStyled } from "../style/style";

const Nav = () => {
    const { pathname } = useLocation();
    return (
        <NavStyled>
            <h1>
                <Link to="/" id="logo">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/" ? "50%" : "0%" }}
                    />
                </li>
                <li>
                    <Link to="/work">2. Our Work</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/" ? "50%" : "0%" }}
                    />
                </li>
                <li>
                    <Link to="/contact">3. Contact Us</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/" ? "50%" : "0%" }}
                    />
                </li>
            </ul>
        </NavStyled>
    )
}

export default Nav