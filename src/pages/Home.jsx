import React from "react";
import { Container, Col } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdRemoveRedEye, MdDownload } from "react-icons/md";
import "../styles/Home.css";

const Home = () => {
  const { name, titles, tagline } = useSelector((state) => state.home);

  return (
    <Container fluid className="hero-section">
      <div className="black-overlay"></div>
      <div className="inner-container">
        <Col md={12} className="hero-content mt-lg-5 mt-sm-0 text-center">
          <h1 className="hero-heading">
            <TypeAnimation
              sequence={[
                `Hi, I’m ${name}`,
                1500,
                ...titles.flatMap((t) => [t, 1500]),
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
              cursor={true}
            />
          </h1>
          <p className="hero-subheading">{tagline}</p>

          {/* Removed descriptionShort paragraph */}

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
