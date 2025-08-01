import { CardContent } from '@mui/joy';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Card, Title, Paragraph, IconButton, Text, Divider } from 'react-native-paper';

const AccountCard = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(prev => !prev);

  const styles = {
    outerCard: {
      margin: 16,
      elevation: 4,
    },
    innerCard:{},
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
    }
  };

  return (
    <Card style={styles.outerCard}>
      <Card.Content>
        <Text variant="titleLarge" style={styles.titleText}>Title Large</Text>
        <Text style={styles.helperText} variant='labelMedium'>Helper text under the title</Text>

        
          <Card style={styles.innerCard}>
            
        <Text style={styles.blanceHelperText} variant='labelMedium'>Balance</Text>
        <Text variant="titleMedium" style={styles.balanceText}>100 USD</Text>
          </Card>
     <Divider style={styles.bottomDivider}/>
      </Card.Content>
         
      <Card.Actions style={styles.actionsRow}>
        <IconButton
            size={10}
          icon={expanded ? 'chevron-up' : 'chevron-down'}
          onPress={toggleExpand}
        />
      </Card.Actions>
      <Card.Content>
        {expanded && (
        <Text>Transections</Text>
          )}
      </Card.Content>
      
    </Card>
  );
};

export default AccountCard;
