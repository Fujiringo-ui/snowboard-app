import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import { TopPage } from "src/Pages";
import { TestRouter } from ".";

const MainRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TopPage />} />
        
                <Route path="/test/*" element={<TestRouter />} />
            </Routes>
        </Router>
    )
}

export default MainRouter;