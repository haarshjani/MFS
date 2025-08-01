const { createSlice } = require("@reduxjs/toolkit");
import { PayloadAction } from '@reduxjs/toolkit';
import {Accounts} from '../../interfaces/accounts'

type TAccountState = Accounts[]

const initialState : TAccountState = [{
id: '',
  customer_id:'',
  accountNumber: '',
  balance: 0,
  currency: ''
}]
const accountSlice = createSlice({
  name : 'accounts',
  initialState,
  reducers : {
    setAccounts : (state :TAccountState, action : PayloadAction<TAccountState>) => {

      return  action.payload;
    }

  }

})

export const { setAccounts } = accountSlice.actions;
export default accountSlice.reducer;