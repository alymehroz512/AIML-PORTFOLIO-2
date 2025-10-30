import React from "react";
import { Container, Col } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdRemoveRedEye, MdDownload } from "react-icons/md";
import "../styles/Home.css";

const Home = () => {
  const { name, titles, tagline, descriptionFull, descriptionShort } = useSelector(
    (state) => state.home
  );

  return (
    <Container fluid className="hero-section">
      <div className="black-overlay"></div> {/* 🖤 semi-transparent black wrapper */}
      <div className="inner-container">
        <Col md={12} className="hero-content mt-lg-5 mt-sm-0">
          <h1 className="hero-heading">
            <TypeAnimation
              sequence={[
                `Hi, I’m ${name}`,
                1500,
                ...titles.flatMap((t) => [t, 1500]),
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </h1>

          <p className="hero-subheading">{tagline}</p>

          <p className="hero-subheading-small full-text">{descriptionFull}</p>
          <p className="hero-subheading-small short-text">{descriptionShort}</p>

          <div className="hero-buttons">
            <NavLink to="/projects" className="hero-button">
              Explore Projects
              <MdRemoveRedEye className="icon" />
            </NavLink>

            <a href="/assets/AliMehroz_CV.pdf" download className="hero-button">
              Download CV
              <MdDownload className="icon" />
            </a>
          </div>
        </Col>
      </div>
    </Container>
  );
};

export default Home;
