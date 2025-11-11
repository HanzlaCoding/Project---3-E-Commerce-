import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadUserData: (state, action) => {
      state.userData = action.payload;
    },
    removeUserData: (state, action) => {
      state.userData = null;
    },
  },
});

export const { loadUserData, removeUserData } = userSlice.actions;
export default userSlice.reducer;
