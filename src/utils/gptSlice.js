import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "ShowGPT",
  initialState: {
    showGPTSearch: false,
  },
  reducers: {
    toggleShowGPTSearch: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
  },
});

export const { toggleShowGPTSearch } = gptSlice.actions;
export default gptSlice.reducer;
