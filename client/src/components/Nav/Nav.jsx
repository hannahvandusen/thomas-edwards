import React from "react";
import "./nav/css";
import { Navbar } from "reactstrap";

function Nav() {
    return (
        <div className="navbar">
            <a href="/">Home</a>
            <a href="/">About Thomas</a>
            <a href="/">Testimonials</a>
            <a href="/">Newsletter</a>
            <a href="/">Shop</a>
            <a href="/">Contact</a>
        </div>
    );
}

export default Nav;
