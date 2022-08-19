import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface paginationSliceState {
  value: string;
}

const initialState: paginationSliceState = {
  value: "1",
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    //actions
    setCurrentPage(state, action) {
      state.value = action.payload;
    },
  },
});

export const selectCurrentPage = (state: RootState) =>
  state.paginationReducer.value;

export const { setCurrentPage } = paginationSlice.actions;

export default paginationSlice.reducer;
