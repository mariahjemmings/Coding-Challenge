

import React from "react";
import UsersComp from "./Components/UsersComp";
import "bootstrap/dist/css/bootstrap.min.css";

import Filter from "./Components/Filter";
import { Routes, Route}
    from 'react-router-dom';
import Navigation from "./Components/Navigation";
function App() {
  return (
    <div className="App">
      <Navigation />
       <Routes>
       <Route path="/" element={<UsersComp />} />
      <Route path="/filter%20for%20users" element={<Filter />} />
        </Routes>
    

        
    </div>
  );
}



export default App;