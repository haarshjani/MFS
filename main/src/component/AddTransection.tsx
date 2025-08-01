import React from "react";
import TransectionForm from "./forms/TransectionForm";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import ADD_TRANSECTION from "../graphql/transection_mutation";
import { UPDATE_ACCOUNT } from "../graphql/account_mutation";


const AddTransection = () => {

     const navigate = useNavigate();
     const {accountId, type} = useParams();
     const account = useSelector((state :any )=> state.accounts.find((a :{id : string}) => a.id === accountId ))

     console.log("account", account);
     
     const [addTransection, { loading, error }] = useMutation(ADD_TRANSECTION, {
        onError: () => {}
    });
    const [updateAccount, { loading : updateacLoading, error : updateacError }] = useMutation(UPDATE_ACCOUNT, {
        onCompleted: () => navigate(-1),
        onError: () => {}
    });
    const handleSubmit = async (data: { description: string; amount: string }) => {
       
       const today = new Date().toISOString().split('T')[0];
       const balance =  type && (type?.toLowerCase() === 'credit' ? account.balance + parseFloat(data.amount): account.balance - parseFloat(data.amount))
        await addTransection({
            variables : {
            account_id : accountId,
            type:type,
            amount: parseFloat(data.amount),
            description: data.description || '',
            date: today
            }
        })
        await updateAccount({
            variables:{
                id: accountId,
                amount: balance,
                

            }
        })
    }
    return(
        <TransectionForm  onSubmit={handleSubmit} type={type} accountData={account}/>
    )
}

export default AddTransection