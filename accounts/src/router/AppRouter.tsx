import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "../pages/Dashboard"
import Customers from "../pages/Customers"; // Assuming you have an Accounts component
import Drawer from "../component/Drawer";
import { CssBaseline } from '@mui/joy';
import Accounts from "../pages/Accounts";
import AddCustomer from "../component/AddCustomer";
import EditCustomer from "../component/EditCustomer";
import TransectionList from "../component/TransectionList";
import AddAccount from "../component/AddAccount";
import TransectionForm from "../component/forms/TransectionForm";
import AddTransection from "../component/AddTransection";

const AppRouter = () => {
    return (
        <>
        {/* <CssBaseline /> */}
        <Router>
            <Routes>
                <Route path="/accounts" element={<Accounts />} />
                {/* <Route path="/:customerId/add" element={<AddAccount/>} />
                <Route path="/:customerId/accounts" element={<Accounts />} /> */}
                
                {/* <Route path="/transections" element={<TransectionList />}/>
                <Route path="/:accountId/transections" element={<TransectionList />}/>
                <Route path="/:accountId/transection/:type" element={<AddTransection />}/> */}
                      
            </Routes>
        </Router>
    
        </>
    );
};

export default AppRouter;