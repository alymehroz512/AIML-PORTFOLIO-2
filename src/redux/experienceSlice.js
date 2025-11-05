import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hero: {
    title: "Professional Journey & Experience",
  },

  tagline: {
    text: "Transforming vision into reality through innovation, design, and technology that empower progress in Pakistan’s digital landscape",
  },

  experiences: [
    {
      position: "Lead Python Developer",
      company: "CodeVertex Labs",
      duration: "March 2022 – Present",
      details: [
        "Leading the design, development, and deployment of AI and machine learning models using TensorFlow, PyTorch, and Scikit-learn.",
        "Developing full-stack applications integrating ML-driven solutions with Django, Flask, and React.",
        "Creating scalable RESTful APIs and microservices for enterprise-grade applications.",
        "Managing data pipelines using Apache Airflow, Apache Spark, and PostgreSQL.",
        "Implementing MLOps best practices using Docker, Kubernetes, Jenkins, and GitHub Actions.",
        "Mentoring junior developers and conducting technical code reviews.",
      ],
    },
    {
      position: "Senior AI/ML Engineer",
      company: "InnovaSoft Solutions",
      duration: "January 2019 – February 2022",
      details: [
        "Built and deployed AI/ML models for predictive analytics and automation.",
        "Developed REST APIs and microservices with Flask, Django, and FastAPI.",
        "Managed MLOps workflows using Airflow, Docker, Jenkins, and Kubernetes.",
        "Integrated AWS and Azure cloud services for model deployment and real-time monitoring.",
        "Collaborated with cross-functional teams to align AI initiatives with business goals.",
      ],
    },
    {
      position: "Software Engineer",
      company: "TechHive Digital",
      duration: "June 2015 – December 2018",
      details: [
        "Developed Python-based web applications for data analytics and reporting.",
        "Built full-stack web platforms using Django, Flask, and ReactJS.",
        "Implemented CI/CD pipelines and containerization using Docker and Kubernetes.",
        "Designed optimized databases with PostgreSQL and MongoDB for large-scale systems.",
        "Improved application performance through caching, load balancing, and async tasks.",
      ],
    },
  ],
};

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {},
});

export default experienceSlice.reducer;
