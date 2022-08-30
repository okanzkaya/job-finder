import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  sidebar: false,
};

export const reduxSlice = createSlice({
  name: "reducer",
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.sidebar = !state.sidebar
      //console.log(state.sidebar)
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleNav, decrement, incrementByAmount } = reduxSlice.actions;

export default reduxSlice.reducer;
