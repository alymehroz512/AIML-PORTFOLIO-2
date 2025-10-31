import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hero: {
    title: 'Contact'
  },
  tagline: {
    text: 'Get in Touch - Let\'s Build Something Amazing Together'
  },
  contactInfo: [
    {
      type: 'Email',
      details: 'hello@example.com'
    },
    {
      type: 'Phone',
      details: '+1 (123) 456-7890'
    },
    {
      type: 'LinkedIn',
      details: 'linkedin.com/in/yourprofile'
    },
    {
      type: 'GitHub',
      details: 'github.com/yourusername'
    }
  ]
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {}
});

export default contactSlice.reducer;