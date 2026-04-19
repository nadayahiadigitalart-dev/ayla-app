import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from './pages/Home';
import Signin from './pages/Signin';
import Onboarding from './pages/Onboarding';
import Onboarding2 from './pages/Onboarding2';
import Onboarding3 from './pages/Onboarding3';
import Signup from './pages/Signup';
import Verify from './pages/Verify';
import ReadyScreen from './pages/Readyscreen';
import Home from './pages/Home';





  const Routing = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Onboarding />} />
            <Route path='/onboarding2' element={<Onboarding2 />} />
            <Route path='/onboarding3' element={<Onboarding3 />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/verify' element={<Verify />} />
            <Route path='/ready' element={<ReadyScreen />} />
            <Route path='/home' element={<Home />} />






           
          
           
            {/* <Route path='*' element={<Error />} /> */}

        </Routes>
        </BrowserRouter>
     );
  }
   
  export default Routing;