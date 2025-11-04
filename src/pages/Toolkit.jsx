import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../styles/Toolkit.css";

const Toolkit = () => {
  const { hero, tagline, tools } = useSelector((state) => state.toolkit);

  return (
    <>
      {/* 🌌 Hero Section */}
      <Container fluid className="toolkit-hero-section">
        <div className="toolkit-inner-container">
          <Col md={12} className="toolkit-content">
            <h2 className="toolkit-subheading">{hero.title}</h2>
          </Col>
        </div>
      </Container>

      {/* 🛠️ Toolkit Section */}
      <Container fluid className="toolkit-section">
        <div className="toolkit-container">
          {/* 🧠 Tagline */}
          <h2 className="toolkit-tagline">{tagline.text}</h2>

          <Row className="toolkit-list">
            {tools.map((tool, index) => (
              <Col
                key={index}
                lg={6}
                md={12}
                sm={12}
                className="d-flex justify-content-center mb-5"
              >
                <div className="toolkit-item">
                  <div className="toolkit-header">
                    <span className="toolkit-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="toolkit-title-container">
                      <h3 className="toolkit-title">{tool.name}</h3>
                      <span className="toolkit-duration">{tool.experience}</span>
                    </div>
                  </div>
                  <div className="toolkit-body">
                    <p>{tool.description}</p>
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

export default Toolkit;
