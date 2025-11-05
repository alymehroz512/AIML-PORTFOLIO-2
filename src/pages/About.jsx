import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import * as FaIcons from "react-icons/fa";
import "../styles/About.css";

const About = () => {
  const { hero, milestones, timelineHeading } = useSelector((state) => state.about);
  return (
    <>
      <Container fluid className="about-hero-section">
        <div className="about-inner-container">
          <Col md={12} className="about-content">
            <h1 className="about-subheading">{hero.title}</h1>
          </Col>
        </div>
      </Container>
      <Container fluid className="about-timeline-section">
          <h2 className="timeline-heading">{timelineHeading}</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => {
              const IconComponent = FaIcons[milestone.icon];
              return (
                <Row
                  key={index}
                  className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                  data-number={String(index + 1).padStart(2, "0")}
                >
                  <Col md={6} className="timeline-content">
                    {/* Replace year with icon */}
                    <h3 className="timeline-icon">
                      {IconComponent && <IconComponent />}
                    </h3>
                    <h4>{milestone.title}</h4>
                    <p>{milestone.description}</p>
                  </Col>
                </Row>
              );
            })}
          </div>
      </Container>
    </>
  );
};

export default About;