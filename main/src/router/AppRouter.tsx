import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "../pages/Dashboard"

import RemoteAccouts from "../component/Accounts/RemoteAccountList";
import SideDrawer from "../component/SideDrawer";
import RemoteTransectionList from "../component/Transections/RemoteTransectionList";
import RemoteTransectionDetails from "../pages/RemoteTransectionDetails";
import AccountList from "../pages/AccountList";


const AppRouter = () => {
    return (
        <>
        <Router>
             <SideDrawer>
            <Routes>
                {/* <Route path="/" element={<DashBoard />} />
                 */}
                <Route path="/" element={<AccountList />} />
                <Route path="/transections" element={<RemoteTransectionList/>} />
                <Route path="/transections/:transectionId/details" element={<RemoteTransectionDetails/>} />
                      
            </Routes>
            </SideDrawer> 
        </Router>
    
        </>
    );
};

export default AppRouter;