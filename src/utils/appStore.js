import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import showGPTSearchReducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: showGPTSearchReducer
  },
});

export default appStore;
