import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: []
};

export const outputSlice = createSlice({
  name: 'outputState',
  initialState,
  reducers: {
    changeOutputState: (state , action) => {
      state.value = [...state.value , ...action.payload];
    },
    resetOutputState: (state) => {
      state.value = [];
    }
  }
});


export const { changeOutputState , resetOutputState } = outputSlice.actions;
export default outputSlice.reducer;
