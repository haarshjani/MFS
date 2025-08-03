import React, { useEffect, useState } from "react";


import AccountCard from "./AccountCard";
import {  useParams } from "ui-kit";
import { useQuery } from "@apollo/client";
import { GET_ACCOUNTS } from "../../graphql/account_queries";
import useDebounce from "../../hooks/useDebounce";
import { Accounts } from "../../interfaces/accounts";

import { useDispatch, useSelector } from "react-redux";
import { setAccounts } from "../../redux/Slices/AccountSlice";
import { List, Text, TextInput } from "react-native-paper";
import { View } from "react-native";

const AccountList = () => {

  const {customerId } = useParams();
 
  console.log("customerId:",  customerId);

  const accountsData =useSelector((state:any) =>state.accounts)
  const [acSearchInput, setACSearch] = useState<string>("");
  const debouncedACSearch = useDebounce(acSearchInput, 500);
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
    <View>
     <TextInput
     style={{maxWidth : 300}}
      mode="outlined"
      placeholder="Account Number..."
      right={<TextInput.Icon icon="search" />}
      onChangeText={(newText) =>setACSearch(newText)
      }
    />
    <List.Section>
        {
            accountsData.map((data : Accounts) =>  <AccountCard data={data}/>)
        }
        
    </List.Section>
    </View>
  
    );
   
};

export default AccountList;