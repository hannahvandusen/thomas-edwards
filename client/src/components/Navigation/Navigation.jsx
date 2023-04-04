import React, { useEffect, useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap'


function Navigation(args) {

    let style = {
        width: "100%",
        background: "black",
        opacity: ".5",
        color: "white"
    }

    return (

    <div className='sticky-top' style={style}>
            <Nav className='navigation' >
                <NavbarBrand href='/' className='navbarbrand' style={{fontSize: "1.5em"}}>Inner Famous</NavbarBrand>
                        <NavItem>
                            <NavLink href="/">
                            Home
                        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/store">Store</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/testimonials">Testimonials</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/newsletter">Newsletter</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                About
                            </DropdownToggle>
                            <DropdownMenu right dark>
                                <DropdownItem href='/about'>About Thomas
                                </DropdownItem>
                                <DropdownItem href='/contact'>Contact</DropdownItem>
                                <DropdownItem divider />
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
    </ div>
    )
}

export default Navigation