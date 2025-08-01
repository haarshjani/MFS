import React, { useEffect, useState } from "react";
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';

import {GET_All_CUSTOMERS} from "../graphql/customer_queries";
import { useQuery } from '@apollo/client';

import CustomerCard from "./CustomerCard";
import { CustomerWithOptionalAccounts } from "../interfaces/customer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCustomers } from "../redux/Slices/CustomerSlice";
import useDebounce from "../hooks/useDebounce";




const CustomerList = () => {

    const navigate = useNavigate();
    const customerData = useSelector((state : any) => state.customers);
    const [customerFTSearch, setCustomerFTSearch] = useState("")
    const debouncedFTSearch = useDebounce(customerFTSearch, 700)
    const [page, setPage] = useState(0)
    const { loading, error, data } = useQuery(GET_All_CUSTOMERS,{
      variables : {
        page: page,
        perPage : 5,
        filter : {
          q : debouncedFTSearch
        }
      }
    });
    const { allCustomers  = [] } = data || {};
    const dispatch = useDispatch()

    useEffect(() => {
        if (data) {
           dispatch(setCustomers(allCustomers));
        }
    }, [data, dispatch]);
   
    if (loading) return <p>Loading customers...</p>;
 
    console.log("customers", customerData);
    
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
          Customers
        </Typography>
       
           <Button variant="soft" size="sm" startDecorator={<Add />} onClick={() => navigate('/addcustomer')}>
          Add
       </Button>
          
       
    </Box>
  
      
       <List >
        <ListItem  sx={{display: 'flex', justifyContent:"flex-end"}}>
          <Input
            placeholder="Search..."
            endDecorator={<SearchRoundedIcon />}
            size="sm"
            value={customerFTSearch}
            onChange={(e) => setCustomerFTSearch(e.target.value)}
            sx={{ width: 200 }}
          />
        </ListItem>
        {
 
        customerData.map((customer : CustomerWithOptionalAccounts) =>(
            <ListItem key={'customer'+customer.id } sx={{paddingTop: 0, paddingBottom: 0}}>
                <CustomerCard data={customer}/>
            </ListItem>)
        )}
        {allCustomers.length !==0 && <ListItem sx={{display : 'flex'}}>
           <Button  variant="soft" sx={{width: '100%'}} onClick={() => setPage(prev => prev+1)}>
              Load More...
            </Button>
        </ListItem>}
        </List>

    </Sheet>
  
    );
   
};

export default CustomerList;