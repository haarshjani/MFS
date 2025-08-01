import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";

import TransectionCard from "./TransectionCard";

import { useQuery } from "@apollo/client";
import { GET_FILTERED_TRANSACTIONS } from "../graphql/transection_queries";
import { ITransection } from "../interfaces/transection";
import { useParams } from "react-router-dom";
import { Button, FormControl, FormLabel, Input, Option, Select } from "@mui/joy";
import { Controller, useForm } from "react-hook-form";

type FormValues = {
  type: string;
  dateFrom: string;
  dateTo: string;
};

const TransectionList = () => {
    const {accountId} = useParams();
    const { control,formState, handleSubmit , reset} = useForm<FormValues>({
      defaultValues:{
        type : '',
        dateTo:'',
        dateFrom:''

      }
    });
    const [transectionsData, setTrenasectionData] = useState<ITransection[]>([])
    const [filters, setFilters] = useState({
      type: '',
      dateFrom: '',
      dateTo: '',
    })
 
    const {type : filterType,dateFrom, dateTo} = filters
    const [page, setPage] = useState(0)
    const {data, loading, error} = useQuery(GET_FILTERED_TRANSACTIONS,{
        variables: {
           page : page,
           perPage : 5,
           filter:{
            ...accountId &&{account_id : accountId},
            ...filterType &&{type : filterType.toUpperCase()},
            ...dateFrom && dateTo &&{date_gte:dateFrom, date_lte : dateTo }
           }}
    });
    const { allTransections  = [] } = data || {};

    useEffect(() => {

      if(data){

        setTrenasectionData([...transectionsData, ...allTransections])
      }
    },[data])

    useEffect(() =>{
      setTrenasectionData([...allTransections])
       
    },[filterType, dateFrom, dateTo])
    const onSubmitFilters = (data : FormValues) => {

      console.log("submit" , data);
      
       
      setFilters(data)

      
      
    }
    if (loading) return <p>Loading Transections...</p>;
    console.log("data",data);
  return (
    <Sheet sx={{ width: "100%", borderRadius: "sm", backgroundColor: "white" }}>
      <Box
        sx={[
          {
            display: "flex",
            alignItems: "center",
            py: 1,
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            borderTopLeftRadius: "var(--unstable_actionRadius)",
            borderTopRightRadius: "var(--unstable_actionRadius)",
          },
        ]}
      >
        <Typography
          level="body-lg"
          sx={{ flex: "1 1 100%", fontSize: "xl", fontWeight: "lg" }}
          id="tableTitle"
        >
          Transections
        </Typography>
      </Box>

      <List>
         <ListItem  sx={{display: 'flex', justifyContent : 'flex-end'}}>
          <form onSubmit={handleSubmit(onSubmitFilters)} style={{ width: '100%' ,gap:5, display : "flex" , alignItems : "flex-end", justifyContent:'flex-end'}}>
        
            <FormControl>
              <FormLabel>Type</FormLabel>
              <Controller
                name="type"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder="Select type"
                    onChange={(_, value) => field.onChange(value||'')}
                  >
                    <Option value="debit">Debit</Option>
                    <Option value="credit">Credit</Option>
                  </Select>
                )}
              />
            </FormControl>

            <FormControl >
              <FormLabel>From Date</FormLabel>
              <Controller
                name="dateFrom"
                control={control}
               
                render={({ field }) => (
                  <Input type="date" {...field}   />
                )}
              />
            </FormControl>

            <FormControl >
              <FormLabel>To Date</FormLabel>
              <Controller
                name="dateTo"
                control={control}
                render={({ field }) => (
                  <Input type="date" {...field}  />
                )}
              />
            </FormControl>

      
            <Button type="submit" variant="soft" >
              Apply 
            </Button>
            <Button  variant="soft" color="neutral" onClick={()=>{ 
              reset()
              setFilters({type :'',dateFrom :'', dateTo:''})
              setPage(0)
              }}>
              clear 
            </Button>

      
            </form>
        </ListItem>
        {
          transectionsData.map((trasection :ITransection) =>(
          <ListItem key={'transect_'+trasection.id} sx={{ paddingTop: 0, paddingBottom: 0 }}>
             <TransectionCard data={trasection} />
        </ListItem>
          ))
        }
        { data?.allTransections.length !== 0 && <ListItem sx={{display : 'flex'}}>
           <Button  variant="soft" sx={{width: '100%'}} onClick={() => setPage(prev => prev+1)}>
              Load More...
            </Button>
        </ListItem>}
      </List>
    </Sheet>
  );
};

export default TransectionList;
