// src/redux/navSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isExpanded: false,
  links: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/projects" },
    { label: "Toolkit", path: "/devtools" },
    { label: "Contact", path: "/contact" },
  ],
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    // Set the expanded state directly (used by Navbar)
    setExpanded: (state, action) => {
      state.isExpanded = action.payload;
    },
    // Toggle navbar expanded/collapsed state
    toggleExpanded: (state) => {
      state.isExpanded = !state.isExpanded;
    },
    // Collapse navbar when a link is clicked
    collapseNav: (state) => {
      state.isExpanded = false;
    },
    // Dynamically update navigation links (optional)
    setNavLinks: (state, action) => {
      state.links = action.payload;
    },
  },
});

export const { setExpanded, toggleExpanded, collapseNav, setNavLinks } =
  navSlice.actions;
export default navSlice.reducer;