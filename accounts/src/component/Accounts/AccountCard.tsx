import { CardContent } from '@mui/joy';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Card, Title, Paragraph, IconButton, Text, Divider, List } from 'react-native-paper';
import { Accounts } from '../../interfaces/accounts';

interface AccountCardPropsTypes {
  data : Accounts
}
const AccountCard = ({data} : AccountCardPropsTypes) => {

  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(prev => !prev);

  const styles = {
    outerCard: {
      margin: 10,
      
    },
    titleText: {
      color: '#2196F3', 
    },
    helperText: {
      color: '#888',
    },
    innerCard: {
      backgroundColor: '#eeeeee', 
      maxWidth:240,
      marginTop : 10,
      padding: 12,
      
    },
    actionsRow: {
      justifyContent: 'flex-end',
      height: 5
    },
    balanceText : {
        color : 'green',
        paddingLeft : 0
    },
    blanceHelperText : {
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

  return (
    <Card style={styles.outerCard}>
      <Card.Content>
        <Text variant="titleLarge" style={styles.titleText}>{data.accountNumber}</Text>
        <Text style={styles.helperText} variant='labelMedium'>AccountNumber</Text>

        
          <Card style={styles.innerCard}>
            
        <Text style={styles.blanceHelperText} variant='labelMedium'>Balance</Text>
        <Text variant="titleMedium" style={styles.balanceText}>{data.balance +" "+ data.currency}</Text>
          </Card>
     <Divider style={styles.bottomDivider}/>
      </Card.Content>
         
      <Card.Actions style={styles.actionsRow}>
        <Text style={styles.trenasectionListHeader} variant='labelSmall'>ShowTransections</Text>
        <IconButton
            size={10}
          icon={expanded ? 'chevron-up' : 'chevron-down'}
          onPress={toggleExpand}
        />
        
      </Card.Actions>
      <Card.Content>
        {expanded && (
          <List.Section>
            {
              data.Transections?.map(({id, date}, index) => {
                if(index<3){
                  return(<List.Item title={id} description={date}/>)
                }
              })
            }
          </List.Section>
          )}
      </Card.Content>
      
    </Card>
  );
};

export default AccountCard;
