import { Accounts } from "./accounts";


type AccountOptional = Partial<Accounts>;
interface ITransection{
 id: string;
 account_id: string;
 type: string;
 amount: number;
 description: string;
 date: string;
 Account?: AccountOptional;
}
export{ ITransection }