import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransectionList from "../component/transections/TransectionList";

const AppRouter = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/transections" element={<TransectionList />}/>
                
                      
            </Routes>
        </Router>
    
        </>
    );
};

export default AppRouter;