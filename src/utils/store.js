// Import statements
import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice"; // Importing the reducer from appSlice

// Store configuration
const store = configureStore({
  reducer: {
    app: appReducer, // Using appReducer here
  },
});

export default store;
