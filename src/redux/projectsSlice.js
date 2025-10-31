// projectsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hero: {
    title: 'Project Highlights & Achievements'
  },
  tagline: {
    text: 'A selection of my top projects combining AI, automation, 3D simulation, and secure web technology all developed with modern frameworks and advanced system architecture'
  },
  projects: [
    {
      name: 'AI Chatbot Intelligent Conversational Assistant',
      year: '2015',
      description: `An advanced conversational AI assistant built using Python and TensorFlow, capable of understanding context and intent via transformer-based NLP models. The system features a responsive React Native frontend styled with TailwindCSS, offering smooth conversational experiences. Integrated with OpenAI API and Hugging Face models, it supports translation, summarization, and creative writing tasks. Node.js and Express handle authentication (JWT), MongoDB manages persistent chat data, and Docker ensures scalable deployments. Tested thoroughly with Postman and developed in VS Code for multi-platform consistency.`,
      techs: ['Python', 'TensorFlow', 'React Native', 'Node.js', 'Express', 'MongoDB', 'OpenAI API', 'TailwindCSS', 'Docker', 'GitHub', 'VS Code', 'Postman']
    },
    {
      name: 'BIONE Futuristic AI Innovation Platform',
      year: '2016',
      description: `BIONE is a futuristic AI research and visualization platform developed with Next.js and TailwindCSS, designed to demonstrate real-time computer vision and robotics intelligence. It integrates TensorFlow and OpenCV for visual analytics, while ROS and Unity handle robotics simulation and motion systems. Flask and FastAPI power modular microservices that handle AI inference and data analysis. The frontend integrates Three.js and Framer Motion for stunning 3D animations. Cloud deployment across AWS, Google Cloud, and Azure ensures high scalability and reliability, with Docker and Postman used for seamless CI/CD workflows.`,
      techs: ['Nextjs', 'TailwindCSS', 'Framer Motion', 'Threejs', 'Python', 'Flask', 'FastAPI', 'TensorFlow', 'PyTorch', 'OpenCV', 'ROS', 'Blender', 'Unity', 'AWS', 'Google Cloud', 'Azure', 'Docker', 'GitHub', 'VS Code', 'Postman']
    },
    {
      name: 'Veon AI – Intelligent Automation and Decision Platform',
      year: '2017',
      description: `Veon AI is a next-gen automation platform that merges intelligent agents, predictive analytics, and conversational systems to enhance business decision-making. Built with React and TailwindCSS, it offers an elegant and dynamic interface featuring multiple AI-driven modules such as Analytics Agent, Predictive Agent, and Smart Automation. Backend AI logic is powered by Python, TensorFlow, and FastAPI for real-time inference, while Node.js and Express handle system orchestration. The project emphasizes security via JWT, containerized deployment through Docker, and scalable cloud hosting on AWS. Postman testing ensures API robustness and reliability across environments.`,
      techs: ['React', 'TailwindCSS', 'Python', 'TensorFlow', 'FastAPI', 'Node.js', 'Express', 'Docker', 'AWS', 'GitHub', 'VS Code', 'Postman', 'JWT']
    },
    {
      name: 'HyperChain – AI-Powered Blockchain Security System',
      year: '2016',
      description: `HyperChain is a cutting-edge blockchain ecosystem enhanced with AI-powered verification and security modules. Built using React, TailwindCSS, and Node.js, it delivers a sleek, futuristic web experience inspired by decentralized technologies. Python-based TensorFlow models are used to predict and prevent fraudulent transactions in real time. Smart contracts are managed through Solidity and deployed on Ethereum, ensuring transparency and scalability. The backend, orchestrated with Express and FastAPI, communicates with blockchain nodes via secure APIs tested through Postman. Deployed using Docker containers on AWS and Azure, HyperChain ensures 99.9% uptime, unmatched transaction speed, and AI-driven threat intelligence for enterprise blockchain networks.`,
      techs: ['React', 'TailwindCSS', 'Node.js', 'Express', 'Python', 'TensorFlow', 'FastAPI', 'Blockchain', 'Docker', 'AWS', 'Azure', 'Postman', 'GitHub']
    },
    {
      name: 'CyberPunk – Dystopian AI Storytelling Engine',
      year: '2015',
      description: `A futuristic AI-powered storytelling platform set in a cyberpunk universe. Users explore immersive narratives, generate dynamic lore, and interact with AI characters in a high-tech, low-life dystopia. Built with React and Three.js for 3D visuals, animated with Framer Motion, and styled using TailwindCSS. The backend uses Python and FastAPI to power procedural story generation via OpenAI API. 3D assets are crafted in Blender, UI/UX designed in Figma. Fully containerized with Docker and deployed on AWS for global scalability. The platform blurs the line between humanity and machinery through interactive events and evolving world lore.`,
      techs: ['React', 'Threejs', 'Framer Motion', 'TailwindCSS', 'Python', 'FastAPI', 'OpenAI API', 'Blender', 'Figma', 'Docker', 'AWS', 'GitHub', 'VS Code']
    }
  ]
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {}
});

export default projectsSlice.reducer;