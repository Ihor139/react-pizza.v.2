import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortPropertyEnum } from "../../../components/Sort";
import { FilterSliceState, Sort } from "./types";

const initialState: FilterSliceState = {
  categoryId: 0,
  sortType: {
    name: "популярности ↓",
    sortProperty: SortPropertyEnum.RATING_DESC,
  },
};

export const slice = createSlice({
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

// Action creators are generated for each case reducer function
export const { setCategoryId, setSortType, setFilterParams } = slice.actions;

export default slice.reducer;
