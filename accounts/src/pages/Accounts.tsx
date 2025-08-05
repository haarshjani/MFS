import React, { useState } from "react";

import AccountList from "../component/Accounts/AccountList";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import useDebounce from "../hooks/useDebounce";



const Accounts = () => {
      const [acSearchInput, setACSearch] = useState<string>("");
      const debouncedACSearch = useDebounce(acSearchInput, 500);
    
    return (
        <View>
     <TextInput
     style={{maxWidth : 300}}
      mode="outlined"
      placeholder="Account Number..."
      right={<TextInput.Icon icon="magnify" />}
      onChangeText={(newText) =>setACSearch(newText)
      }
    />
       <AccountList debouncedACSearch={debouncedACSearch}/>
       </View>
    );
};

export default Accounts;