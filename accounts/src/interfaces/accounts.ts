
import { Customer } from "./customer";


type CustomerOptional = Partial<Customer>;

interface Accounts {
  id: string;
  customer_id: string;
  accountNumber: string;
  balance: number;
  currency: string;
  Customer?: CustomerOptional
}

export { Accounts, CustomerOptional };