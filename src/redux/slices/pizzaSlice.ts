import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type Pizza = {
  id: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  rating: number;
};

interface PizzaSliceState {
  items: Pizza[];
  status: "loading" | "successes" | "error";
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
  status: "loading",
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
      state.status = "loading";
    });
    builder.addCase(
      fetchItems.fulfilled,
      (state, action: PayloadAction<Pizza[]>) => {
        state.items = action.payload;
        state.status = "successes";
      }
    );
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.items = [];
      state.status = "error";
    });
  },
});

export const selectPizza = (state: any) => state.pizzaReducer;

export const { setIsLoading } = pizzasSlice.actions;

export default pizzasSlice.reducer;
