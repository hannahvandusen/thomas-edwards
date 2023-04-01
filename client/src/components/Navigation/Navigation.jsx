import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Collapse } from 'reactstrap'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"


function Navigation(args) {

    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
    // <div className='navbar'>
    //     <a href="/">Home</a>
    //     <a href="/">About Thomas</a>
    //     <a href="/">Testimonials</a>
    //     <a href="/">Newsletter</a>
    //     <a href="/">Shop</a>
    // </div>
    <>
            <Nav fill pills>
                <NavbarBrand>Inner Famous</NavbarBrand>
                <NavItem>
                    <NavLink href='/'>Home</NavLink>
                </NavItem>
            </Nav>

        {/* </Navbar> */}

    </>
    )
}

export default Navigation