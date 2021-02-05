import { createSlice } from '@reduxjs/toolkit';

export const styleReducer = createSlice({
  name: 'styles',
  initialState: {
    lightOrDarkMode: 'light',
  },
  reducers: {
    setLightOrDarkMode: (state, action) => {
      state.lightOrDarkMode = action.payload
    }
  },
});

export const { setLightOrDarkMode } = styleReducer.actions;

export const setLightDarkMode = (mode) => {
  setLightOrDarkMode(mode)
};

export default styleReducer.reducer;
