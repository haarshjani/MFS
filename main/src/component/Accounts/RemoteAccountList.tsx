import React,{lazy, Suspense, useEffect, useState} from "react";
import { View } from "react-native";
import { events, mittEvent } from "ui-kit";
import { useNavigate } from "ui-kit";

const AccountList = lazy(()=>import('accounts/AccountList')) 


const RemoteAccouts =()=>{


  return(
    <Suspense fallback={<View>Loading...</View>}>
      <AccountList />
    </Suspense>
  )
}

export default RemoteAccouts;