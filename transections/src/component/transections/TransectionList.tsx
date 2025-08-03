import React, { useEffect, useState } from "react";


import { useQuery } from "@apollo/client";
import { GET_FILTERED_TRANSACTIONS } from "../../graphql/transection_queries";
import { ITransection } from "../../interfaces/transection";
import { useParams } from "ui-kit";
import { Platform, Pressable, StyleSheet, View } from "react-native";
import { Button, Card, List } from "react-native-paper";
import TransectionCard from "./TransectionCard";


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    minHeight: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'

  },
  fullWidthButton: {
    width: '100%',
  },
  fullWidthContent: {
    height: 50,
  },
});

const TransectionList = () => {
    const [transectionsData, setTrenasectionData] = useState<ITransection[]>([])
    const[transectionId, setTransectionId]= useState("")
    const [page, setPage] = useState(0)
    const {data, loading, error} = useQuery(GET_FILTERED_TRANSACTIONS,{
        variables: {
           page : page,
           perPage : 5,
           filter:{
            ...transectionId &&{id : transectionId},
           }}
    });
    const { allTransections  = [] } = data || {};

    useEffect(() => {

      if(data){
        if(page>0){
            setTrenasectionData([...transectionsData,...allTransections])
        }
        else{
             setTrenasectionData(allTransections)
        }
       
      }
    },[data, page])

   
    if (loading) return <View>Loading Transections...</View>;
    if(error) return<View >{error.message}</View>
    console.log("data",transectionsData);
  return (
    <View>
    <Card.Actions>
     {Platform.OS === 'web' ? (<Button icon="download" mode="outlined" onPress={() => console.log('Pressed')} >
    Download CSV
  </Button>):(
    <Button icon="Share" mode="outlined" onPress={() => console.log('Pressed')} >
    Share
  </Button>
  )}
    </Card.Actions>
    <List.Section >
        {
            transectionsData.map((data : ITransection) =>  <TransectionCard data={data}/>)
        }
        <Pressable onPress={() => setPage(prev=>prev+1)}>
            <View style={styles.container}>
                Click to load More..
            </View>
    </Pressable>
        
    </List.Section>
    </View>
  );
};

export default TransectionList;
