import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// First, create the thunk
// вынесли асинхронную логику получения данных с UI в redux

export const fetchItems = createAsyncThunk('items/fetchItems', async (params) => {
  const { sortBy, order, category, search, currentPage } = params;
  const { data } = await axios.get(
    `/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`,
  );
  return data;
});

const initialState = {
  items: [],
  status: 'loading',
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    //actions
    setItems(state, action) {
      state.items = action.payload;
    },
    setIsLoading(state, action) {
      state.loading = action.payload;
    },
  },
  // код для createAsyncThunk
  extraReducers: {
    [fetchItems.fulfilled]: (state, { meta, payload }) => {
      state.items = payload;
      state.status = 'sucsses';
    },
    [fetchItems.pending]: (state, { meta, payload }) => {
      state.status = 'loading';
    },
    [fetchItems.rejected]: (state, { meta, payload, error }) => {
      state.error = error;
      state.status = 'error';
    },
  },
});

export const { setItems, setIsLoading } = pizzasSlice.actions;

export default pizzasSlice.reducer;
