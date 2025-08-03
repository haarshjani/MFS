import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accounts from "../pages/Accounts";

const AppRouter = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/accounts" element={<Accounts />} />
                      
            </Routes>
        </Router>
    
        </>
    );
};

export default AppRouter;