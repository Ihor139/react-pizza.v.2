import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    //actions
    setSearchTerm(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setSearchTerm } = SearchSlice.actions;

export default SearchSlice.reducer;
