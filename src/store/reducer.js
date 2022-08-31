import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: false,
  jobsSidebar: false,
};

export const reduxSlice = createSlice({
  name: "reducer",
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.sidebar = !state.sidebar;
      //console.log(state.sidebar)
    },
    toggleJobsSideBar: (state) => {
      state.jobsSidebar = !state.jobsSidebar;
      //console.log(state.jobsSidebar);
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleNav, toggleJobsSideBar } = reduxSlice.actions;

export default reduxSlice.reducer;
