import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './slices/filterSlice';
import searchReducer from './slices/searchSlice';
import paginationReducer from './slices/paginationSlice';
import pizzaReducer from './slices/pizzaSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    filterReducer,
    searchReducer,
    paginationReducer,
    pizzaReducer,
    cartReducer
  },
});
