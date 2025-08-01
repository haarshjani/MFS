import React from "react";
import AccountForm from "./forms/AccountForm";
import { useMutation } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { ADD_ACCOUNT } from "../graphql/account_mutation";


function generateAccountNumber() {
  const min = 1000000000; 
  const max = 9999999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const AddAccount = () => {
     const navigate = useNavigate();
      const {customerId } = useParams();
     const [addAccount, { loading, error }] = useMutation(ADD_ACCOUNT, {
        onCompleted: () => navigate(`/${customerId}/accounts`),
        onError: () => {}
    });
    const handleSubmit = (data: { currency: string, amount : string }) => {

        const accountNumber = generateAccountNumber().toString()
        addAccount({
            variables: {
                currency : data.currency,
                balance : parseFloat(data.amount) || 0.00 ,
                accountNumber : accountNumber,
                customer_id : customerId
            }
        });
        
    }
    return (
       <AccountForm onSubmit={handleSubmit} />
    );
};

export default AddAccount;