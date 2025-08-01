
import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './Slices/CustomerSlice';
import accountReducer from './Slices/AccountSlice'

export const store = configureStore({
  reducer: {
    customers: customerReducer,
    accounts : accountReducer
  },
});
