import React from "react";
import CustomerForm from "./forms/CustomerForm";
import { useMutation } from "@apollo/client";
import ADD_CUSTOMER from "../graphql/customer_mutation";
import { useNavigate } from "react-router-dom";


const AddCustomer = () => {

    const navigate = useNavigate();
     const [addCustomer, { loading, error }] = useMutation(ADD_CUSTOMER, {
        onCompleted: () => navigate("/customers"),
        onError: () => {}
    });
    const handleSubmit = (data: { name: string; email: string }) => {
       
        addCustomer({
            variables: {
                name: data.name,
                email: data.email
            }
        });
        
    }
    return (
        <CustomerForm onSubmit={handleSubmit}/>
    );
}
export default AddCustomer;