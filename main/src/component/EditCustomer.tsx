import React from "react";
import CustomerForm from "./forms/CustomerForm";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UPDATE_CUSTOMER } from "../graphql/customer_mutation";
import { useMutation } from "@apollo/client";


const EditCustomer = () => {
    const {customerId } = useParams();
   const customerData = useSelector((state : any) => state.customers.find((c: { id: string }) => c.id === customerId));
   const {id, name, email} = customerData || {};

    const navigate = useNavigate();

     const [updateCustomer, { loading, error }] = useMutation(UPDATE_CUSTOMER, {
        onCompleted: () => navigate("/customers"),
        onError: (error) => { console.error("Error updating customer:", error); }
    });
    const handleSubmit = (data: { name: string; email: string }) => {
       

        console.log("Updating customer with data:", data);
        updateCustomer({
            variables: {
                id : id,
                name: data.name,
                email: data.email
            }
        }); 
    }
   
    return (
        <CustomerForm onSubmit={handleSubmit} initialData={{id, name, email}}/>
    );
}   

export default EditCustomer;