import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../styles/Projects.css";

const Projects = () => {
  const { hero, tagline, projects } = useSelector((state) => state.projects);
  return (
    <>
      {/* 🌌 Hero Section */}
      <Container fluid className="projects-hero-section">
        <div className="projects-inner-container">
          <Col md={12} className="projects-content">
            <h2 className="projects-subheading">{hero.title}</h2>
          </Col>
        </div>
      </Container>
      {/* 🛠️ Projects Section */}
      <Container fluid className="projects-section">
        <div className="projects-container">
          {/* 🧠 Tagline */}
          <h2 className="projects-tagline">{tagline.text}</h2>
          <Row className="projects-list">
            {projects.map((project, index) => {
              return (
                <Col
                  key={index}
                  lg={6}
                  md={12}
                  sm={12}
                  className="d-flex justify-content-center mb-5"
                >
                  <div className="projects-item">
                    <div className="projects-header">
                      <span className="projects-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="projects-title-container">
                        <h3 className="projects-title">{project.name}</h3>
                        <span className="projects-year">{project.year}</span>
                      </div>
                    </div>
                    <div className="projects-body">
                      <p>{project.description}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Projects;