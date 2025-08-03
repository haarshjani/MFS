
import { useQuery } from "@apollo/client";
import { GET_FILTERED_TRANSACTIONS } from "../../graphql/transection_queries";
import React,{lazy, Suspense} from "react";
import { View } from "react-native";
import { useParams } from "ui-kit";

const TransectionList = lazy(()=>import('transections/TransectionList')) 

interface RemoteTransectionDetailsPropsTypes{
  id:string;
}

const RemoteTransectionList = () => {

  

  
    return(
    <Suspense fallback={<View>Loading...</View>}>
      <TransectionList />
    </Suspense>
  )
}

export default RemoteTransectionList;