import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hero: {
    title: "Artificial Intelligence & Forward",
  },
  timelineHeading:
    "Building intelligent AI applications with intuitive, high performance design that turns data into impactful solutions",
  milestones: [
    { icon: "FaBrain", title: "Started My AI Journey", description: "Began exploring Artificial Intelligence and Machine Learning concepts, laying the foundation for my career." },
    { icon: "FaChartLine", title: "First ML Project", description: "Developed my first machine learning model for a predictive analytics project." },
    { icon: "FaNetworkWired", title: "Advanced ML Models", description: "Worked on complex algorithms including NLP and computer vision projects." },
    { icon: "FaDatabase", title: "Industry Experience", description: "Joined a tech company as an AI/ML engineer, delivering data-driven solutions." },
    { icon: "FaRobot", title: "AI Research Contributions", description: "Contributed to research papers and internal AI innovation projects." },
    { icon: "FaCamera", title: "Leadership Role", description: "Led a small team of AI engineers, mentoring juniors and managing projects." },
    { icon: "FaCogs", title: "Deployment & Production", description: "Deployed ML models in production environments and optimized pipelines." },
    { icon: "FaServer", title: "Cloud & Scalable AI", description: "Integrated cloud solutions and scalable AI pipelines using AWS and GCP." },
    { icon: "FaCloud", title: "AI Solutions for Businesses", description: "Delivered AI-driven solutions improving business KPIs and automation." },
    { icon: "FaMicrochip", title: "10 Years of Experience", description: "Celebrating a decade of AI & ML expertise, focusing on innovation and impact." },
  ],
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
});

export default aboutSlice.reducer;
