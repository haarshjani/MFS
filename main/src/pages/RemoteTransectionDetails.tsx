
import { useQuery } from "@apollo/client";
import { GET_FILTERED_TRANSACTIONS } from "../graphql/transection_queries";

import React,{lazy, Suspense} from "react";
import { View } from "react-native";
import {useParams} from "../hooks/useCrossPlatform"

const TransectionDetails = lazy(()=>import('transections/TransectionDetails')) 


const RemoteTransectionDetails = () => {
  const {transectionId} = useParams()

  const {data, loading, error} = useQuery(GET_FILTERED_TRANSACTIONS,{
        variables: {
           filter:{
            ...transectionId &&{id : transectionId},
           }}
    });
    const { allTransections  = [] } = data || {};
    const transectiondata  = allTransections[0]

    console.log("transection Details", transectionId)
    if(loading) return <View>Loading...</View>

    return(
    <Suspense fallback={<View>Loading...</View>}>
      <TransectionDetails data={transectiondata}/>
    </Suspense>
    
  )
}

export default RemoteTransectionDetails;