import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { collapseNav, toggleExpanded } from "../redux/navSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/CustomNavbar.css";
import Logo from "../assets/Logo.svg";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const CustomNavbar = () => {
  const dispatch = useDispatch();
  const { isExpanded, links } = useSelector((state) => state.nav);

  return (
    <Navbar
      expand="lg"
      className="bg-black"
      fixed="top"
      expanded={isExpanded}
      onToggle={() => dispatch(toggleExpanded())}
    >
      {/* Logo */}
      <Navbar.Brand>
        <img src={Logo} alt="Logo" className="logo ms-3" />
      </Navbar.Brand>

      {/* Mobile Toggle Icon */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-0">
        {isExpanded ? <HiX color="white" size={24} /> : <HiMenuAlt3 color="white" size={24} />}
      </Navbar.Toggle>

      {/* Navbar Links */}
      <Navbar.Collapse id="basic-navbar-nav" className="ms-3">
        <Nav className="me-auto mt-1 mx-0">
          {links.map((link, index) => (
            <Nav.Link
              as={NavLink}
              to={link.path}
              key={index}
              onClick={() => dispatch(collapseNav())}
              className="text-white nav-link-custom"
            >
              {link.label}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
