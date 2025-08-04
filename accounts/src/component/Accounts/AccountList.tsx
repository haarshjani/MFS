import React, { useEffect, useState } from "react";


import AccountCard from "./AccountCard";
import {  useParams } from "../../hooks/useCrossPlatform";
import { useQuery } from "@apollo/client";
import { GET_ACCOUNTS } from "../../graphql/account_queries";
import useDebounce from "../../hooks/useDebounce";
import { Accounts } from "../../interfaces/accounts";

import { useDispatch, useSelector } from "react-redux";
import { setAccounts } from "../../redux/Slices/AccountSlice";
import { List, Text, TextInput } from "react-native-paper";


interface AccountListPropsTypes{
  debouncedACSearch: string;
}
const AccountList = ({debouncedACSearch}:AccountListPropsTypes) => {

  const {customerId } = useParams();
 
  console.log("customerId:",  customerId);

  const accountsData =useSelector((state:any) =>state.accounts)

   const { loading, error, data } = useQuery(GET_ACCOUNTS,{
    variables: { filter : {
      ...customerId && {customer_id : customerId || null},
      ...debouncedACSearch && {accountNumber: debouncedACSearch}
    }},
   });

   const dispatch = useDispatch()
    const { allAccounts  = [] } = data || {};

     useEffect(() => {

        if (data) {
             const sortedData = {
            ...data,
            allAccounts: data.allAccounts.map(account => ({
                ...account,
                Transections: [...account.Transections].sort(
                (a, b) => new Date(b.date) - new Date(a.date)
                )
            }))
            };
           dispatch(setAccounts(sortedData.allAccounts));
        }
    }, [data, dispatch]);
     
    if (loading) return <Text>Loading customers...</Text>;

      console.log("account data", accountsData);

    return(
    
    <List.Section>
        {
            accountsData.map((data : Accounts) =>  <AccountCard data={data}/>)
        }
        
    </List.Section>
  
    );
   
};

export default AccountList;