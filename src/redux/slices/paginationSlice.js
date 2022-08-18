import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '1',
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    //actions
    setCurrentPage(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setCurrentPage } = paginationSlice.actions;

export default paginationSlice.reducer;
