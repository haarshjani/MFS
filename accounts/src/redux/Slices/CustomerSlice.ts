// src/features/counter/counterSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Customer } from '../../interfaces/customer'; // Adjust the import path as necessary

type CustomerState = Customer[]

const initialState  :  CustomerState= [];

const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    setCustomers: (state, action : PayloadAction<CustomerState>) => {
      return  [...state,...action.payload];
      
    }
  },
});

export const { setCustomers } = customerSlice.actions;
export default customerSlice.reducer;
