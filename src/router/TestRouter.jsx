import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Header, Items, Test } from "src/tests";

const TestRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Test />} />
            <Route path="items" element={<Items />} />
            <Route path="header" element={<Header />} />
        </Routes>
    )
}

console.log("test router")

export default TestRouter;