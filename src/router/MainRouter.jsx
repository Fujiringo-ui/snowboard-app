import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TopPage, SecondPage } from 'src/Pages/index';
import { TestRouter } from '.';

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/snowpark" element={<SecondPage />} />
        <Route path="/test/*" element={<TestRouter />} />
        <Route path="*" element={<div>404 ERROR PAGE</div>} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
