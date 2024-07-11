import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "Movies",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
  },
  reducers: {
    nowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    trailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { nowPlayingMovies, trailer } = movieSlice.actions;

export default movieSlice.reducer;
