import {createSlice} from "@reduxjs/toolkit"

const appSlice = createSlice({
  name:"app",
  initialState:{
  ismenuopen:true,
  },

  reducers:{
    toggleMenu:(state)=>{
      state.ismenuopen=!state.ismenuopen;
    }
  }
})

export const {toggleMenu}=appSlice.actions;
export default appSlice.reducer;