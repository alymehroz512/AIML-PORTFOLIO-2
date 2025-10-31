// Projects.jsx
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../styles/Projects.css";
// Import images from src/assets (add more if needed)
import Project1 from "../assets/Project1.jpg";
import Project2 from "../assets/Project2.jpg";
import Project3 from "../assets/Project3.jpg";
import Project4 from "../assets/Project4.jpg";
import Project5 from "../assets/Project5.jpg";
// Import icons with colors
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaJsSquare,
  FaLock,
  FaUnity,
  FaGithub,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiMongodb,
  SiFigma,
  SiExpress,
  SiOpenai,
  SiTailwindcss,
  SiFlask,
  SiFastapi,
  SiOpencv,
  SiRos,
  SiBlender,
  SiAmazonwebservices,
  SiGooglecloud,
  SiPostman,
  SiBlockchaindotcom,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { VscVscode, VscAzure } from "react-icons/vsc";
import { MdAnimation } from "react-icons/md";

const imageMap = [Project1, Project2, Project3, Project4, Project5];

const techIcons = {
  Python: <FaPython size={24} color="#3776AB" />,
  TensorFlow: <SiTensorflow size={24} color="#FF6F00" />,
  PyTorch: <SiPytorch size={24} color="#EE4C2C" />,
  React: <FaReact size={24} color="#61DAFB" />,
  "React Native": <FaReact size={24} color="#61DAFB" />,
  Nextjs: <FaReact size={24} color="#000000" />,
  "Node.js": <FaNodeJs size={24} color="#43853D" />,
  Express: <SiExpress size={24} color="#000000" />,
  Flask: <SiFlask size={24} color="#000000" />,
  FastAPI: <SiFastapi size={24} color="#009688" />,
  MongoDB: <SiMongodb size={24} color="#47A248" />,
  JavaScript: <FaJsSquare size={24} color="#F7DF1E" />,
  GitHub: <FaGithub size={24} color="#181717" />,
  Docker: <FaDocker size={24} color="#2496ED" />,
  Figma: <SiFigma size={24} color="#F24E1E" />,
  "OpenAI API": <SiOpenai size={24} color="#412991" />,
  TailwindCSS: <SiTailwindcss size={24} color="#06B6D4" />,
  "Framer Motion": <MdAnimation size={24} color="#C678DD" />,
  Threejs: <TbBrandThreejs size={24} color="#000000" />,
  OpenCV: <SiOpencv size={24} color="#5C3EE8" />,
  ROS: <SiRos size={24} color="#223C4E" />,
  Blender: <SiBlender size={24} color="#F97316" />,
  Unity: <FaUnity size={24} color="#222C37" />,
  AWS: <SiAmazonwebservices size={24} color="#FF9900" />,
  "Google Cloud": <SiGooglecloud size={24} color="#4285F4" />,
  Azure: <VscAzure size={24} color="#0078D4" />,
  "VS Code": <VscVscode size={24} color="#007ACC" />,
  Postman: <SiPostman size={24} color="#FF6C37" />,
  Blockchain: <SiBlockchaindotcom size={24} color="#29B6F6" />,
  JWT: <FaLock size={24} color="#FFB300" />,
};

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
          <div className="projects-alternating">
            {projects.map((project, index) => {
              // Assign imported image dynamically
              const projectImage = imageMap[index];
              return (
                <Row
                  key={index}
                  className="project-row"
                >
                  <Col md={12} className="project-image-col">
                    <div className="project-image-wrapper">
                      <img src={projectImage} alt={project.name} className="project-image" />
                      <span className="project-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </Col>
                  <Col md={12} className="project-content-col">
                    <div className="project-content">
                      <div className="project-header">
                        <h3 className="project-title">{project.name}</h3>
                        <span className="project-year">{project.year}</span>
                      </div>
                      <p className="project-description">{project.description}</p>
                      <div className="project-techs">
                        {project.techs.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {techIcons[tech] || null}
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Col>
                </Row>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
};
export default Projects;