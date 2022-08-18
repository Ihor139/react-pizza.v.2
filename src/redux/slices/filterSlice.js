import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortType: {
    name: 'популярности ↓',
    sortProperty: 'rating',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    //actions
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
    setFilterParams(state, action) {
      state.sortType =  action.payload.sort;
      state.categoryId = Number(action.payload.categoryId);
    }
  },
});

// Action creators are generated for each case reducer function
export const { setCategoryId, setSortType, setFilterParams } = filterSlice.actions;

export default filterSlice.reducer;
