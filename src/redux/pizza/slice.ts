import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza, PizzaSliceState } from "./types";

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

// First, create the thunk
// вынесли асинхронную логику получения данных с UI в redux

export const fetchItems = createAsyncThunk<Pizza[], Record<string, string>>(
  "items/fetchItems",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`
    );
    return data;
  }
);

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING,
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    //actions
    // setItems(state, action) {
    //   state.items = action.payload;
    // },
    setIsLoading(state, action) {
      state.status = action.payload;
    },
  },
  // код для createAsyncThunk
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state, action) => {
      state.status = Status.LOADING;
    });
    builder.addCase(
      fetchItems.fulfilled,
      (state, action: PayloadAction<Pizza[]>) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      }
    );
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.items = [];
      state.status = Status.ERROR;
    });
  },
});

export const { setIsLoading } = pizzasSlice.actions;

export default pizzasSlice.reducer;
