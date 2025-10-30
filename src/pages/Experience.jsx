import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../styles/Experience.css";

const Experience = () => {
  const { hero, tagline, experiences } = useSelector(
    (state) => state.experience
  );

  return (
    <>
      {/* 🌌 Hero Section */}
      <Container fluid className="experience-hero-section">
        <div className="experience-inner-container">
          <Col md={12} className="experience-content">
            <h1 className="experience-subheading">{hero.title}</h1>
          </Col>
        </div>
      </Container>

      {/* 💼 Experience Section */}
      <Container fluid className="experience-section">
        <div className="experience-container">
          {/* 🧠 Tagline */}
          <h2 className="experience-tagline">{tagline.text}</h2>

          <Row className="experience-list">
            {experiences.map((exp, index) => (
              <Col
                key={index}
                lg={12}
                md={12}
                sm={12}
                className="d-flex justify-content-center mb-5"
              >
                <div className="experience-card">
                  <div className="experience-header">
                    <span className="experience-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="experience-title">
                      {exp.position} | <span>{exp.company}</span>
                    </h3>
                    <p className="experience-duration">{exp.duration}</p>
                  </div>

                  <div className="experience-body">
                    <ul>
                      {exp.details.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Experience;
