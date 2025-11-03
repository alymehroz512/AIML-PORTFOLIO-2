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
  descriptionShort:
    "Artifical Intelligence & Machine Learning Engineer passionate about building intelligent systems using Python, TensorFlow, and PyTorch. Focused on solving real-world challenges in predictive analytics, computer vision, and natural language processing.",
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