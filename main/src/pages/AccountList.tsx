import { useNavigate } from "../hooks/useCrossPlatform";
import RemoteAccouts from "../component/Accounts/RemoteAccountList";
import React,{ Suspense, useEffect} from "react";
import { View } from "react-native";
import { events, mittEvent } from "ui-kit";



const AccountList =()=>{

 const navigate = useNavigate()

 const eventHandler = (id)=>{ 
      console.log("event recieved",id);
      
         navigate(`/transections/${id}/details`)
      }

  useEffect(() => {
     mittEvent.on(events.TRANSECTION_SELECTED,eventHandler )
   
  },[])

  return(
    <RemoteAccouts/>
  )
}

export default AccountList;