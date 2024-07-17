import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import showGPTSearchReducer from "./gptSlice";
import configReducer from "../utils/configuarationSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: showGPTSearchReducer,
    config:  configReducer
  },
});

export default appStore;
