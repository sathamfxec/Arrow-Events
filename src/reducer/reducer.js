import { createSlice } from '@reduxjs/toolkit';

export const sourceFlag = createSlice({
  name: 'source',
  initialState: {
    value: {
      row: 2,
      column: 3,
    },
  },
  reducers: {
    setSource: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setSource } = sourceFlag.actions;

export default sourceFlag.reducer;
