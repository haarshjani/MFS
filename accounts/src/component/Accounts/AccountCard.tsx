import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  IconButton,
  Text,
  Divider,
  List,
} from "react-native-paper";
import {Card as UiKitCard} from "ui-kit"
import { Accounts } from "../../interfaces/accounts";
import { CardTitle, events } from "ui-kit";
import { GET_FILTERED_TRANSACTIONS } from "../../graphql/transection_queries";
import { useQuery } from "@apollo/client";
import { mittEvent } from "ui-kit";

interface AccountCardPropsTypes {
  data: Accounts;
}

const AccountCard = ({ data }: AccountCardPropsTypes) => {
  const [expanded, setExpanded] = useState(false);

  // mittEvent.on(events.TRANSECTION_SELECTED,(id) =>console.log("event recieved",id));
  const toggleExpand = () => setExpanded((prev) => !prev);

  const {
    data: transectionData,
    loading,
    error,
  } = useQuery(GET_FILTERED_TRANSACTIONS, {
    variables: {
      page: 0,
      perPage: 3,
      sortField: "date",
      sortOrder: "desc",
      filter: {
        ...(data.id && { account_id: data.id }),
      },
    },
  });
  const { allTransections: topThreeTransections = [] } = transectionData || {};

  console.log("topthree transections", topThreeTransections);

  const stylesNative = StyleSheet.create({
    customerDetails : {
      flexDirection : "row",
      alignItems:"center",
      justifyContent : "space-between"
    }
  })
  const styles = {
 
    outerCard: {
      margin: 10,
      padding: 10,
      elevation : 4,
      backgroundColor : '#rgba(174, 208, 246, 0.29)'
    },
    titleText: {
      color: "#2196F3",
    },
    helperText: {
      color: "#888",
    },
    innerCard: {
      backgroundColor: "#eeeeee",
      maxWidth: 240,
      marginTop: 10,
      padding: 12,
    },
    actionsRow: {
      justifyContent: "flex-end",
      height: 5,
    },
    balanceText: {
      color: "green",
      paddingLeft: 0,
    },
    blanceHelperText: {
      color: "black",
    },
    bottomDivider: {
      marginTop: 10,
      marginBottom: 20,
    },
    trenasectionListHeader: {
      color: "#2196F3",
    },
  };

  if (loading) return <View>Loading...</View>;

  return (
    <UiKitCard style={styles.outerCard}>
      <Card.Content>
        <View style={stylesNative.customerDetails}>
          <View>
        <CardTitle title={data.accountNumber} />
        <Text style={styles.helperText} variant="labelMedium">
          AccountNumber
        </Text>
        </View>
        <View>
          <Text variant="titleMedium" style={{textAlign : "right"}}>{data.Customer?.name}</Text>
          <Text>{data.Customer?.email}</Text>
        </View>
        </View>
        <Card style={styles.innerCard}>
          <Text style={styles.blanceHelperText} variant="labelMedium">
            Balance
          </Text>
          <Text variant="titleMedium" style={styles.balanceText}>
            {data.balance + " " + data.currency}
          </Text>
        </Card>
        <Divider style={styles.bottomDivider} />
      </Card.Content>

      <Card.Actions style={styles.actionsRow}>
        <Text style={styles.trenasectionListHeader} variant="labelSmall">
          ShowTransections
        </Text>
        <IconButton
          size={10}
          icon={expanded ? "chevron-up" : "chevron-down"}
          onPress={toggleExpand}
        />
      </Card.Actions>
      <Card.Content>
        {expanded && (
          <List.Section>
            {topThreeTransections.map(({ id, date }, index) => {
              if (index < 3) {
                return (
                  <List.Item
                    title={date}
                    left={(props) => <Text>{id}</Text>}
                    onPress={() => {
                      console.log("event strted");

                      mittEvent.emit(events.TRANSECTION_SELECTED, id);
                    }}
                  />
                );
              }
            })}
          </List.Section>
        )}
      </Card.Content>
    </UiKitCard>
  );
};

export default AccountCard;
