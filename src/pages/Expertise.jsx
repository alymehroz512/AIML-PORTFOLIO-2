import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import * as MdIcons from "react-icons/md";
import "../styles/Expertise.css";

const Expertise = () => {
  const {
    hero,
    coreSkills,
    secondarySkills,
    coreSkillsSection,
    secondarySkillsSection,
    skillsIntroLine,
  } = useSelector((state) => state.expertise);

  return (
    <>
      {/* 🌌 Hero Section */}
      <Container fluid className="expertise-hero-section">
        <div className="expertise-inner-container">
          <Col md={12} className="expertise-content">
            <h1 className="expertise-subheading">{hero.title}</h1>
          </Col>
        </div>
      </Container>

      {/* 🛠️ Skills Section */}
      <Container fluid className="expertise-skills-section">
        <Container className="skills-container">
          {/* 🧠 Intro Line */}
          <h2 className="skills-intro-line">{skillsIntroLine}</h2>

          {/* 🌟 Core Skills */}
          <h2 className="skills-main-heading">{coreSkillsSection.heading}</h2>
          <p className="skills-subtitle">{coreSkillsSection.subtitle}</p>

          <Row className="skills-grid">
            {coreSkills.map((skill, index) => {
              const IconComponent = MdIcons[skill.icon];
              return (
                <Col
                  key={index}
                  lg={4}
                  md={6}
                  sm={12}
                  className="d-flex justify-content-center mb-4"
                >
                  <div className="skill-card">
                    <div className="card-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="diamond">
                      {IconComponent && (
                        <IconComponent className="diamond-icon" />
                      )}
                    </div>
                    <h4>{skill.title}</h4>
                    <p>{skill.description}</p>
                  </div>
                </Col>
              );
            })}
          </Row>

          {/* 💎 Secondary Skills */}
          <h2 className="skills-main-heading">
            {secondarySkillsSection.heading}
          </h2>
          <p className="skills-subtitle">{secondarySkillsSection.subtitle}</p>

          <Row className="skills-grid">
            {secondarySkills.map((skill, index) => {
              const IconComponent = MdIcons[skill.icon];
              return (
                <Col
                  key={index}
                  lg={4}
                  md={6}
                  sm={12}
                  className="d-flex justify-content-center mb-4"
                >
                  <div className="skill-card">
                    <div className="card-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="diamond">
                      {IconComponent && (
                        <IconComponent className="diamond-icon" />
                      )}
                    </div>
                    <h4>{skill.title}</h4>
                    <p>{skill.description}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Expertise;
