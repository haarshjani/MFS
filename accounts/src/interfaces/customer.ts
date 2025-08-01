import { Accounts } from './accounts';

interface CustomerWithOptionalAccounts {
  id: string;
  name: string;
  email: string;
  Accounts?: Accounts[];
}

interface Customer{
  id: string;
  name: string;
  email: string;
}
export {CustomerWithOptionalAccounts, Customer};
