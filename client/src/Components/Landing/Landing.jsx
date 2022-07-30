import React from "react";
import { NavLink } from 'react-router-dom';
import "./landing.css";
import StyledLanding from "./StyledLanding.jsx";


export default function Landing() {

    return (
        <div className="background">
            <StyledLanding>
                <div className="container">
                    <h1>Dog's Universe</h1>
                    <NavLink to="/home">Welcome</NavLink>
                </div>
            </StyledLanding>
        </div>
        
    )
}