import { configureStore } from '@reduxjs/toolkit';
import outputReducer from '../reducers/index.js';
import isLoadingOutputReducer from '../reducers/isLoadingSlice.js';

export const store = configureStore({
  reducer: {
    output: outputReducer,
    loadingOutput: isLoadingOutputReducer,
  }
});