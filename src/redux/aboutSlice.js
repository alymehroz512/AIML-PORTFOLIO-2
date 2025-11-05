import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hero: {
    title: "Artificial Intelligence & Forward",
  },
  timelineHeading:
    "Building intelligent AI applications with intuitive, high performance design that turns data into impactful solutions",
  milestones: [
    { icon: "FaGraduationCap", title: "Bachelor's in Computer Engineering", description: "Graduated from Sir Syed University of Engineering & Technology, building a solid foundation in programming, algorithms, and hardware-software integration to kickstart my tech journey." },
    { icon: "FaUniversity", title: "Master's in Computer Science", description: "Completed MS at University of Bridgeport, diving deeper into advanced AI concepts, data structures, and software engineering principles that shaped my expertise in machine learning." },
    { icon: "FaBookOpen", title: "Core Interests in AI & ML", description: "Passionate about exploring neural networks, NLP, and computer vision—constantly experimenting with frameworks like PyTorch and TensorFlow to innovate in predictive analytics and automation." },
    { icon: "FaBriefcase", title: "Entry-Level AI Development", description: "Launched career in 2016, engineering backend systems with Django and TensorFlow, streamlining data workflows and deploying predictive models to solve complex business challenges." },
    { icon: "FaChartLine", title: "Advanced ML & Data Science", description: "Honed skills in big data tools like Apache Spark and Kafka, creating ETL processes and models that drive business insights, while embracing agile methodologies for efficient delivery." },
    { icon: "FaUsers", title: "Team Leadership in ML Projects", description: "Starting 2020, directed analytics initiatives using Google Cloud AI, fostering collaboration on CI/CD pipelines for ML, and scaling inference services for real-time decision-making tools." },
    { icon: "FaRocket", title: "Lead Python Developer at Lenovo", description: "Since 2022, architecting distributed AI systems with Kubernetes and Docker, optimizing performance for high-throughput applications, and collaborating cross-functionally for impactful results." },
    { icon: "FaTrophy", title: "Key Achievements & Certifications", description: "Earned AWS ML Specialty, Google Cloud Professional ML Engineer, Azure AI Associate, and CKA certifications—validating over 10 years of hands-on experience in deploying production-grade AI solutions." },
    { icon: "FaLightbulb", title: "Future Aspirations & Innovations", description: "Aiming to pioneer ethical AI advancements, lead R&D in generative models, and contribute to open-source projects that democratize machine learning for global challenges like healthcare and sustainability." },
    { icon: "FaProjectDiagram", title: "Hands-On Projects & Contributions", description: "Built distributed training platforms, real-time ML pipelines processing 50k+ events/sec, and AutoML systems reducing development time by 80%—always pushing boundaries in scalable, efficient AI tech." },
  ],
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
});

export default aboutSlice.reducer;