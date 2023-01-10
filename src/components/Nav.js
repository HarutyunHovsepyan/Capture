import React from "react";
import { Link } from "react-router-dom";
import { NavStyled } from "../style/style"; 

const Nav = () =>{
    return(
        <NavStyled>
            <h1 id="logo">
                <Link to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                </li>
                <li>
                    <Link to="/work">2. Our Work</Link>
                </li>
                <li>
                <Link to="/contact">3. Contact Us</Link>
                </li>
            </ul>
        </NavStyled>
    )
}

export default Nav