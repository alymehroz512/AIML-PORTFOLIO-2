import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";
import homeReducer from "./homeSlice";
import aboutReducer from "./aboutSlice";
import expertiseReducer from "./expertiseSlice";
import experienceReducer from "./experienceSlice";
import toolkitReducer from "./toolkitSlice";
// import projectsReducer from "./projectsSlice"; 
// import contactReducer from "./contactSlice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
    home: homeReducer,
    about: aboutReducer,
    expertise: expertiseReducer,  
    experience: experienceReducer,
    toolkit: toolkitReducer,
    // projects: projectsReducer, 
    // contact: contactReducer,
  },
});