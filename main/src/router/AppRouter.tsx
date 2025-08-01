import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "../pages/Dashboard"
import Customers from "../pages/Customers";
import Drawer from "../pages/Dashboard"
import { CssBaseline } from '@mui/joy';

import AddCustomer from "../component/AddCustomer";
import EditCustomer from "../component/EditCustomer";
import TransectionList from "../component/TransectionList";


import AddTransection from "../component/AddTransection";
import RemoteAccouts from "../component/RemoteAccountList";
import SideDrawer from "../component/SideDrawer";
import AccountCard from "../component/Accounts/AccountCard";

const AppRouter = () => {
    return (
        <>
        {/* <CssBaseline /> */}
        <Router>
             <SideDrawer>
            <Routes>
                <Route path="/" element={<DashBoard />} />
                {/* <Route path="/customers" element={<Customers />} />
                <Route path="/customer/:customerId/edit" element={<EditCustomer />} />  */}
                <Route path="/accounts" element={<RemoteAccouts/>} />
                {/* <Route path="/account/:customerId/add" element={<RemoteAccouts/>} />
                <Route path="/:customerId/accounts" element={<RemoteAccouts />} />
                <Route path="/addcustomer" element={<AddCustomer />} />
                <Route path="/transections" element={<TransectionList />}/>
                <Route path="/:accountId/transections" element={<TransectionList />}/>
                <Route path="/:accountId/transection/:type" element={<AddTransection />}/> */}
                      
            </Routes>
            </SideDrawer> 
        </Router>
    
        </>
    );
};

export default AppRouter;