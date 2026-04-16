import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from './pages/Home';
import Signin from './pages/Signin';




  const Routing = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Signin />} />
           
          
           
            {/* <Route path='*' element={<Error />} /> */}

        </Routes>
        </BrowserRouter>
     );
  }
   
  export default Routing;