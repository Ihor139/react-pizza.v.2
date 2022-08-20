import { RootState } from "../../store";

export const selectSearchTerm = (state: RootState) => state.searchReducer.value;
