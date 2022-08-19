import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SearchSliceState {
  value: string;
}

const initialState: SearchSliceState = {
  value: "",
};

export const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    //actions
    setSearchTerm(state, action) {
      state.value = action.payload;
    },
  },
});

export const selectSearchTerm = (state: RootState) => state.searchReducer.value;

export const { setSearchTerm } = SearchSlice.actions;

export default SearchSlice.reducer;
