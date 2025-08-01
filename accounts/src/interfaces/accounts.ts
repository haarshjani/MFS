
import { Customer } from "./customer";
import { ITransection } from "./transection";


type CustomerOptional = Partial<Customer>;
type TransectionsOptional = Partial<ITransection>[]

interface Accounts {
  id: string;
  customer_id: string;
  accountNumber: string;
  balance: number;
  currency: string;
  Customer?: CustomerOptional
  Transections? : TransectionsOptional
}

export { Accounts, CustomerOptional };