import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hero: {
    title: 'Connect, Collaborate & Create Impact'
  },
  tagline: {
    text: 'Collaborating to create meaningful impact through strategy, creativity, and connections that drive shared success'
  },
  contactInfo: [
    {
      type: 'Email',
      details: 'hello@example.com'
    },
    {
      type: 'Phone',
      details: '+1 (123) 456-7890'
    }
  ]
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {}
});

export default contactSlice.reducer;