// projectsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hero: {
    title: 'Projects'
  },
  tagline: {
    text: 'A showcase of my recent work and contributions to innovative solutions.'
  },
  projects: [
    {
      name: 'E-Commerce Platform',
      year: '2024',
      description: 'Developed a full-stack e-commerce application using React, Node.js, and MongoDB, featuring real-time inventory management and secure payment integration.'
    },
    {
      name: 'AI Chatbot Assistant',
      year: '2023',
      description: 'Built an intelligent chatbot powered by natural language processing with Python and TensorFlow, deployed on AWS for scalable customer support.'
    },
    {
      name: 'Mobile Fitness App',
      year: '2024',
      description: 'Created a cross-platform mobile app with React Native, integrating fitness tracking, personalized workout plans, and social sharing features.'
    },
    {
      name: 'Data Analytics Dashboard',
      year: '2023',
      description: 'Designed an interactive dashboard using D3.js and Express.js to visualize complex datasets, enabling real-time insights for business decision-making.'
    }
  ]
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    updateProjects: (state, action) => {
      state.projects = action.payload;
    },
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    removeProject: (state, action) => {
      state.projects = state.projects.filter((_, index) => index !== action.payload);
    },
    updateHero: (state, action) => {
      state.hero = { ...state.hero, ...action.payload };
    },
    updateTagline: (state, action) => {
      state.tagline = { ...state.tagline, ...action.payload };
    }
  }
});

export const { 
  updateProjects, 
  addProject, 
  removeProject, 
  updateHero, 
  updateTagline 
} = projectsSlice.actions;

export default projectsSlice.reducer;