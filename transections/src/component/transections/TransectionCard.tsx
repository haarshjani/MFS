
import React, { useState } from 'react';
import { Card, Title, Paragraph, IconButton, Text, Divider, List, Surface } from 'react-native-paper';
import {CardTitle, AmountText, Card} from "ui-kit"
import { ITransection } from '../../interfaces/transection';
import { StyleSheet, View } from 'react-native';

interface TrasectionPorpsTypes {
    data : ITransection
}

const TransectionCard = ({data}: TrasectionPorpsTypes) => {


  const styles = {
   
    titleText: {
      color: '#2196F3', 
    },
    helperText: {
      color: '#888',
    },
    innerCard: {
     display :'flex',
     direction:'row',
      backgroundColor: '#eeeeee', 
      maxWidth:170,
      marginTop : 10,
      padding: 12,
      
    },
    actionsRow: {
      justifyContent: 'flex-end',
      height: 5
    },
    amountText : {
        color :  data?.type?.toLowerCase()=== 'credit'? 'green':'red',
        paddingLeft : 0
    },
    amountHelperText : {
        color:'black',

    },
    bottomDivider:{
        marginTop : 10,
        marginBottom : 20,
    },
    trenasectionListHeader:{
      color: '#2196F3'
    }
  };
  const styleNative = StyleSheet.create({
    description:{
      flexDirection : "row",
      gap : 10,
    },

     innerCardDetailsView:{
        flexDirection:'row',
        gap : 30,
        marginTop : 20,
    marginBottom : 20,
    maxWidth: 175,             
    height: 50,
    borderRadius: 10,      
    backgroundColor: data?.type?.toLowerCase()=== 'credit'? 'rgba(99, 171, 99, 0.2)':'rgba(172, 60, 60, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    },
     outerCard: {
      borderWidth: 2,
      marginVertical : 10,
      borderColor:data?.type?.toLowerCase()=== 'credit'?'rgba(99, 171, 99, 0.2)':'rgba(172, 60, 60, 0.2)',
      backgroundColor : data?.type?.toLowerCase()=== 'credit'?'rgba(99, 171, 99, 0.13)': 'rgba(172, 60, 60, 0.13)',
   
    },
    
})

  return (
    <Card key={`transection`+data.id+data.type} style={styleNative.outerCard}>
       
      <Card.Content>
        <Card.Actions>
                 <Text variant='labelMedium'>{data.date}</Text>
        </Card.Actions>
        <CardTitle title={data.Account?.accountNumber}/>
        <Text style={styles.helperText} variant='labelMedium'>AccountNumber</Text>
      
      
          <View style={styleNative.innerCardDetailsView}>
             <View>
            <Text  variant='labelMedium'>Type</Text>
            <Text variant="titleMedium" >{data.type}</Text>
            </View>
            <View>
            <Text variant='labelMedium'>Amount</Text>
            <AmountText  stylesProp={styles.amountText} text={data.amount.toString()}/>
            </View>
           
        </View>

        <View style={styleNative.description}>
          <Text variant='labelMedium'>Description</Text>
           <Text variant='labelMedium' style={{color:"blue"}}>{data.description}</Text>
        </View>
      
      </Card.Content>
      
    </Card>
  );
};

export default TransectionCard;
