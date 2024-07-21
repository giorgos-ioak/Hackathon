import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
}

export const isLoadingSlice = createSlice({
  name: 'outputIsLoading',
  initialState,
  reducers: {
    changeOutputLoading: (state , action) => {
      state.value = action.payload;
    }
  }
})


export const { changeOutputLoading } = isLoadingSlice.actions;
export default isLoadingSlice.reducer;
