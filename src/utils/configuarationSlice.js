import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "Config",
  initialState: {
    userLanguage: "en",
  },
  reducers: {
    setUserLanguage: (state, action) => {
      state.userLanguage = action.payload;
    },
  },
});

export const { setUserLanguage } = configSlice.actions;
export default configSlice.reducer;
