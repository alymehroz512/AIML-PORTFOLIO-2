// src/redux/homeSlice.js
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "Syed Imran Saeed Rizvi",
  titles: [
    "Human-Centered AI Engineer",
    "Cognitive Tech Builder",
    "Smart Systems Builder",
  ],
  tagline: "Empowering the Future with Smarter Systems",
  summaryPoints: [
    "Experienced and results-driven Python Developer with over 10 years of hands-on experience in designing, developing, and deploying scalable web applications and APIs.",
    "Proficient in Python, Django, Flask, and Fast API on the backend, and skilled in JavaScript, React.js, Vue.js, and HTML/CSS on the frontend.",
    "Adept at building robust RESTful services, integrating with cloud platforms like AWS, and utilizing CI/CD pipelines, Docker, and Kubernetes for modern DevOps practices.",
    "Strong background in working with relational and NoSQL databases including PostgreSQL, MySQL, and MongoDB.",
    "Known for writing clean, maintainable code, following agile methodologies, and collaborating effectively with cross-functional teams to deliver high-impact software solutions.",
  ],
};
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    updateTagline: (state, action) => {
      state.tagline = action.payload;
    },
  },
});
export const { updateTagline } = homeSlice.actions;
export default homeSlice.reducer;