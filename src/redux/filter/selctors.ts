import { RootState } from "../../store";

export const filterSelect = (state: RootState) => state.filterReducer;
export const sortSelect = (state: RootState) => state.filterReducer.sortType;
export const categorySelect = (state: RootState) =>
  state.filterReducer.categoryId;
