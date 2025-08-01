import React,{lazy, Suspense} from "react";

const Account = lazy(()=>import('accounts/AccountsApp')) 

const RemoteAccouts =()=>{

  return(
    <Suspense fallback={<div>Loading...</div>}>
      <Account/>
    </Suspense>
  )
}

export default RemoteAccouts;