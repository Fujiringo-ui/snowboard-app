import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import { About, TopPage } from "src/pages";

const MainRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TopPage />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    )
}

console.log('Main Router')

export default MainRouter;