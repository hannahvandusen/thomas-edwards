import React, { useEffect, useState } from "react"
// import { GiHamburgerMenu } from "react-icons/gi"
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
} from "reactstrap"

import Hamburger from "hamburger-react"

function Navigation(args) {
    let style = {
        width: "100%",
        // background: "black",
        // opacity: ".5",
        // color: "white",
    }

    const [btnState, setBtnState] = useState(false)
    const handleClick = () => {
        setBtnState((btnState) => !btnState)
    }

  let toggle = btnState ? (
    <div className="dropdown-content">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/testimonials">Testimonials</NavLink>
      {/* <NavLink href="/newsletter">Newsletter</NavLink> */}
      <NavLink href="/about">About</NavLink>
      <NavLink href="/intake">Contact</NavLink>
    </div>
  ) : null

  return (
    <>
      <div className="sticky-top" style={style}>
        <Nav className="navigation">
          <NavbarBrand
            href="/"
            className="navbarbrand"
            style={{ fontSize: "1.5em" }}
          >
            Inner Famous
          </NavbarBrand>
          {/* <i className="hamburger">
            <GiHamburgerMenu size={25} />
          </i> */}
                    <NavItem className="link">
                        <NavLink style={{ color: "white" }} href="/">
                            Home
                        </NavLink>
                    </NavItem>
                    {/* <NavItem>
                            <NavLink href="/store">Store</NavLink>
                        </NavItem> */}
          <NavItem className="link">
            <NavLink style={{ color: "white" }} href="/testimonials">
              Testimonials
            </NavLink>
          </NavItem>
          <NavItem className="link">
            <NavLink style={{ color: "white" }} href="/about">
              About
            </NavLink>
          </NavItem>
          <NavItem className="link">
            <NavLink style={{ color: "white" }} href="/intake">
              Contact
            </NavLink>
          </NavItem>
          {/* <NavItem style={{ color: "white" }} className="link">
            <NavLink style={{ color: "white" }} href="/newsletter">
              Newsletter
            </NavLink>
          </NavItem> */}
          {/* <UncontrolledDropdown className="link" nav inNavbar>
            <DropdownToggle
              style={{ color: "white" }}
              nav
              caret
              className="link"
            >
              About
            </DropdownToggle>
            <DropdownMenu style={{ backgroundColor: "#16181e" }} end dark>
              <DropdownItem href="/about" className="link">
                About Thomas
              </DropdownItem>
              <DropdownItem href="/intake" className="link">
                Contact
              </DropdownItem>
              <DropdownItem divider />
            </DropdownMenu>
          </UncontrolledDropdown> */}
        </Nav>
      </div>

            <div className="media">
                <NavbarBrand
                    href="/"
                    className="navbarbrandMedia"
                    style={{ fontSize: "1.5em" }}
                >
                    Inner Famous
                </NavbarBrand>

        <div className="dropDown">
          <i onClick={handleClick} className="dropbtn">
            <Hamburger />
          </i>
          <div>{toggle}</div>
        </div>
      </div>
    </>
  )
}

export default Navigation
