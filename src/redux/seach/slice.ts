import { createSlice } from "@reduxjs/toolkit";
import { SearchSliceState } from "./types";

const initialState: SearchSliceState = {
  value: "",
};

export const Slice = createSlice({
  name: "search",
  initialState,
  reducers: {
    //actions
    setSearchTerm(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setSearchTerm } = Slice.actions;

export default Slice.reducer;
