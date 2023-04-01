import React, { useState } from 'react'
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

    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

    <>
            <Nav>

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
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                About
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href='/about'>About Thomas
                                </DropdownItem>
                                <DropdownItem href='/contact'>Contact</DropdownItem>
                                <DropdownItem divider />
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
    </>
    )
}

export default Navigation