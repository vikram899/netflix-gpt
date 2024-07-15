import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "Movies",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
    popularMovies: null,
  },
  reducers: {
    nowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    popularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    trailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { nowPlayingMovies, trailer, popularMovies } = movieSlice.actions;

export default movieSlice.reducer;
