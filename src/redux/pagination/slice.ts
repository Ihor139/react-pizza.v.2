import { createSlice } from "@reduxjs/toolkit";
import { paginationSliceState } from "./types";

const initialState: paginationSliceState = {
  value: "1",
};

export const slice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    //actions
    setCurrentPage(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setCurrentPage } = slice.actions;

export default slice.reducer;
