import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilterValue(state, action) {
      return (state = action.payload);
    },
  },
});

export const { changeFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
