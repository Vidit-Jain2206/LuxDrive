import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: true,
};

const mobileMenu = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    mobileMenuOff: (state = initialState) => {
      state.mode = false;
    },
    mobileMenuOn: (state = initialState) => {
      state.mode = true;
    },
  },
});

export const { mobileMenuOff, mobileMenuOn } = mobileMenu.actions;
export default mobileMenu.reducer;
