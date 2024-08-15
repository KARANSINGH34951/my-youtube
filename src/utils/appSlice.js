// Import statements
import { createSlice } from "@reduxjs/toolkit";

// Slice definition
const appSlice = createSlice({
  name: "app",
  initialState: {
    ismenuopen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.ismenuopen = !state.ismenuopen;
    },
  },
});

// Export actions and reducer
export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;
