import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";
import homeReducer from "./homeSlice";
import aboutReducer from "./aboutSlice";
import expertiseReducer from "./expertiseSlice";
import experienceReducer from "./experienceSlice";
import toolkitReducer from "./toolkitSlice";
import contactReducer from "./contactSlice";
import projectsReducer from "./projectsSlice";
import footerReducer from "./footerSlice"; 

export const store = configureStore({
  reducer: {
    nav: navReducer,
    home: homeReducer,
    about: aboutReducer,
    expertise: expertiseReducer,
    experience: experienceReducer,
    toolkit: toolkitReducer,
    contact: contactReducer,
    projects: projectsReducer,
    footer: footerReducer, 
  },
});
