import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../styles/Contact.css";

const Contact = () => {
  const { hero, tagline, contactInfo } = useSelector((state) => state.contact);
  return (
    <>
      {/* 🌌 Hero Section */}
      <Container fluid className="contact-hero-section">
        <div className="contact-inner-container">
          <Col md={12} className="contact-content">
            <h2 className="contact-subheading">{hero.title}</h2>
          </Col>
        </div>
      </Container>
      {/* 📞 Contact Section */}
      <Container fluid className="contact-section">
        <div className="contact-container">
          {/* 🧠 Tagline */}
          <h2 className="contact-tagline">{tagline.text}</h2>
          <Row className="contact-list">
            {contactInfo.map((info, index) => (
              <Col
                key={index}
                lg={4}
                md={6}
                sm={12}
                className="d-flex justify-content-center mb-5"
              >
                <div className="contact-card">
                  <div className="contact-header">
                    <span className="contact-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="contact-title">{info.type}</h3>
                  </div>
                  <div className="contact-body">
                    <p>{info.details}</p>
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
export default Contact;