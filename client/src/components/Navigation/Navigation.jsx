import React, { useEffect, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
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
      <a href="/">Home</a>
      <a href="/testimonials">Testimonials</a>
      <a href="/newsletter">Newsletter</a>
      <a href="/about">About</a>
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
          <i className="hamburger">
            <GiHamburgerMenu size={25} />
          </i>

          <NavItem className="link">
            <NavLink href="/">Home</NavLink>
          </NavItem>
          {/* <NavItem>
                            <NavLink href="/store">Store</NavLink>
                        </NavItem> */}
          <NavItem className="link">
            <NavLink href="/testimonials">Testimonials</NavLink>
          </NavItem>
          <NavItem className="link">
            <NavLink href="/newsletter">Newsletter</NavLink>
          </NavItem>
          <UncontrolledDropdown className="link" nav inNavbar>
            <DropdownToggle nav caret className="link">
              About
            </DropdownToggle>
            <DropdownMenu end dark>
              <DropdownItem href="/about" className="link">
                About Thomas
              </DropdownItem>
              <DropdownItem href="/intake" className="link">
                Contact
              </DropdownItem>
              <DropdownItem divider />
            </DropdownMenu>
          </UncontrolledDropdown>
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
            <GiHamburgerMenu size={30} />
          </i>
          <div>{toggle}</div>
        </div>
      </div>
    </>
  )
}

export default Navigation
