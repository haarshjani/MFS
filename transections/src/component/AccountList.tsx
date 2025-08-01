import React, { useEffect, useState } from "react";
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Tooltip from '@mui/joy/Tooltip';
import Input from '@mui/joy/Input';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Button, List, ListItem } from "@mui/joy";

import AccountCard from "./AccountCard";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ACCOUNTS } from "../graphql/account_queries";
import useDebounce from "../hooks/useDebounce";
import { Accounts } from "../interfaces/accounts";
import { Add } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setAccounts } from "../redux/Slices/AccountSlice";

const AccountList = () => {

  const {customerId } = useParams();
  const navigate = useNavigate();
  console.log("customerId:",  customerId);
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
           dispatch(setAccounts(allAccounts));
        }
    }, [data, dispatch]);
     
    if (loading) return <p>Loading customers...</p>;

      console.log("account data", allAccounts);

    return(
  
      <Sheet
    
      sx={{ width: '100%', borderRadius: 'sm' , backgroundColor : 'white'}}
    >
        <Box
      sx={[
        {
          display: 'flex',
          alignItems: 'center',
          py: 1,
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          borderTopLeftRadius: 'var(--unstable_actionRadius)',
          borderTopRightRadius: 'var(--unstable_actionRadius)',
        }
      ]}
    >
     
        <Typography
          level="body-lg"
          sx={{ flex: '1 1 100%' ,fontSize: 'xl', fontWeight: 'lg' }}
          id="tableTitle"
        >
          Accounts
        </Typography>
        {customerId && <Button variant="soft" size="sm" startDecorator={<Add />} onClick={() => navigate(`/account/${customerId}/add`)}>
          Add
       </Button>}
        
    </Box>
     <List>
      <ListItem sx={{display: 'flex', justifyContent:"flex-end"}}>
        <Tooltip title="Search">
          <Input
            placeholder="Account Number.."
            endDecorator={<SearchRoundedIcon />}
            size="sm"
            value={acSearchInput}
            onChange={(e) => setACSearch(e.target.value)}
            sx={{ width: 200 }}
            autoFocus
          />
        </Tooltip>
      </ListItem>
      {
        allAccounts.map((account : Accounts) => (
          <ListItem key={account.id}>
            <AccountCard data={account} customerIdParam={customerId}/>
          </ListItem>
        ))  
      }
            
        </List>
    </Sheet>
  
    );
   
};

export default AccountList;