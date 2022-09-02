import { createSlice } from "@reduxjs/toolkit";
import { duplicatedJobData } from "../temp_data/data";

const initialState = {
  sidebar: false,
  jobsSidebar: false,
  categories: duplicatedJobData.length,
  categoriesCurrentPage: 1,
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
    categoriesIncreasePage: (state, maxPage) => {
      if (state.categoriesCurrentPage < maxPage.payload) {
        state.categoriesCurrentPage += 1;
      }
      //console.log(state.categoriesCurrentPage);
    },
    categoriesDecreasePage: (state) => {
      if (state.categoriesCurrentPage > 1) {
        state.categoriesCurrentPage -= 1;
      }
      //console.log(state.categoriesCurrentPage);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleNav,
  toggleJobsSideBar,
  categoriesIncreasePage,
  categoriesDecreasePage,
} = reduxSlice.actions;

export default reduxSlice.reducer;
