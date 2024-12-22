import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';

const MainRoutes = () => {
    return (
        <Router>
        <div>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/chemical" element={<Chemical />} /> */}
          </Routes>
        </div>
      </Router>
    );
};

export default MainRoutes;