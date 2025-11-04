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
