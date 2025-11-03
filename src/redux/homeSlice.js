// src/redux/homeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Syed Imran Saeed Rizvi",
  titles: [
    "Human-Centered AI Engineer",
    "Machine Intelligence Explorer",
    "Smart Systems Builder",
  ],
  tagline: "Empowering the Future with Smarter Systems",
  descriptionFull:
    "I’m an AI/ML Engineer passionate about building intelligent, human-centered systems. Using Python, TensorFlow, PyTorch, and advanced data science tools, I design and deploy machine learning models that tackle real-world challenges in predictive analytics, computer vision, and natural language processing. My focus is transforming raw data into actionable insights and integrating robust AI solutions into production-ready applications.",
  descriptionShort:
    "AI/ML Engineer crafting intelligent systems with Python, TensorFlow & PyTorch to solve real-world problems in predictive analytics, computer vision, and NLP.",
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    updateDescription: (state, action) => {
      state.descriptionFull = action.payload;
    },
  },
});

export const { updateDescription } = homeSlice.actions;
export default homeSlice.reducer;