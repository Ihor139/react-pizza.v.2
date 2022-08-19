import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type Sort = {
  name: string;
  sortProperty: string;
};

interface FilterSliceState {
  categoryId: number;
  sortType: Sort;
}

const initialState: FilterSliceState = {
  categoryId: 0,
  sortType: {
    name: "популярности ↓",
    sortProperty: "rating",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    //actions
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSortType(state, action: PayloadAction<Sort>) {
      state.sortType = action.payload;
    },
    setFilterParams(state, action) {
      state.sortType = action.payload.sortType;
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const filterSelect = (state: RootState) => state.filterReducer;
export const sortSelect = (state: RootState) => state.filterReducer.sortType;
export const categorySelect = (state: RootState) =>
  state.filterReducer.categoryId;

// Action creators are generated for each case reducer function
export const { setCategoryId, setSortType, setFilterParams } =
  filterSlice.actions;

export default filterSlice.reducer;
