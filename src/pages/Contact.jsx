import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { MdSend } from "react-icons/md"; // ✅ Send icon
import "../styles/Contact.css";

const Contact = () => {
  const { hero, tagline, contactInfo } = useSelector((state) => state.contact);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

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

      {/* 📞 Contact Section (merged with form + background image) */}
      <Container fluid className="contact-section">
        <div className="contact-container">
          {/* 🧠 Tagline */}
          <h2 className="contact-tagline">{tagline.text}</h2>

          {/* 📇 Contact Info Cards */}
          <Row className="contact-list">
            {contactInfo.map((info, index) => (
              <Col
                key={index}
                lg={6}
                md={12}
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

          {/* 📝 Contact Form Section (inside same container) */}
          <div className="form-container">
            <div className="form-content">
              <h2 className="form-tagline">
                Whether you have a project in mind or just want to connect, I'm
                all ears! Fill out the form below to start the conversation
              </h2>

              <form className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    placeholder="Message"
                    value={message}
                    style={{ height: "220px" }}
                    onChange={handleMessageChange}
                    maxLength={1500}
                    className="form-textarea"
                    rows={6}
                  ></textarea>
                  <span className="char-count">{message.length}/1500</span>
                </div>

                {/* ✅ Send Button with Icon */}
                <button type="submit" className="form-submit text-uppercase" style={{cursor: 'none'}}>
                  Send Message <MdSend className="send-icon" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
