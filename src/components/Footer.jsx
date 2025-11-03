import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";
import Logo from "../assets/Logo.svg";
import FooterBg from "../assets/FooterBackground.jpg";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  // Get footer data from Redux state
  const { year, author, slogan, links } = useSelector((state) => state.footer);

  return (
    <footer className="footer">
      <div
        className="footer-bg"
        style={{
          backgroundImage: `url(${FooterBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="footer-overlay"></div>

        <div className="footer-content">
          <Container>
            <Row className="align-items-start">
              <Col xs={12}>
                {/* Logo + Description */}
                <div className="logo-section">
                  <img src={Logo} alt="Logo" className="footer-logo" />
                  <p className="footer-desc">
                    A showcase of expertise in Artificial Intelligence and
                    Machine Learning, building innovative solutions for
                    tomorrow.
                  </p>
                </div>

                {/* NavLinks dynamically loaded from Redux */}
                <div className="footer-nav-container">
                  <Nav className="footer-nav mt-2">
                    {links.map((link, index) => (
                      <Nav.Link
                        as={NavLink}
                        to={link.path}
                        key={index}
                        className="footer-link"
                      >
                        {link.label}
                      </Nav.Link>
                    ))}
                  </Nav>
                </div>

                {/* COPYRIGHT */}
                <div
                  style={{
                    textAlign: "left",
                    marginTop: "35px",
                    fontSize: "16px",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "6px",
                    opacity: 0.9,
                    textTransform: "uppercase",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "6px",
                    }}
                  >
                    <MdCopyright
                      style={{
                        fontSize: "25px",
                        marginRight: "5px",
                        verticalAlign: "middle",
                      }}
                    />
                    {year}{" "}
                    <span
                      style={{
                        color: "#00BFFF",
                        textTransform: "uppercase",
                        fontSize: "20px",
                      }}
                    >
                      {author}
                    </span>{" "}
                    — {slogan}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
