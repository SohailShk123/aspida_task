import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, email: "admin@gmail.com", password: "admin", role: "admin" },
    { id: 2, email: "user@gmail.com", password: "user", role: "user" },
  ],
  isAuthenticated:false,
  logedInUser:null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login:(state,action)=>{
      state.isAuthenticated=true;
      state.logedInUser=action.payload;
    },
    logout:(state)=>{
      state.isAuthenticated=false;
      state.logedInUser=null;
    }
  },
});

// Action creators are generated for each case reducer function
export const { login,logout } = usersSlice.actions;

export default usersSlice.reducer;
