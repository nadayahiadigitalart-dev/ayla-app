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
import Parenting from './pages/Parenting';
import Discover from './pages/Discover';
import Playgrounds from './pages/Playgrounds';
import PlaceDetails from './pages/PlaceDetails';
import Situation1 from './pages/Situation1';
import Situation1_2 from './pages/Situation1_2';
import Situation1_3 from './pages/Situation1_3';
import Situation1_4 from './pages/Situation1_4';





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
            <Route path='/parenting' element={<Parenting />} />
            <Route path='/discover' element={<Discover />} />
            <Route path='/playgrounds' element={<Playgrounds />} />
            <Route path='/placedetails/:title' element={<PlaceDetails />} />
            <Route path='/situation1' element={<Situation1 />} />
            <Route path='/situation1_2' element={<Situation1_2 />} />
            <Route path='/situation1_3' element={<Situation1_3 />} />
            <Route path='/situation1_4' element={<Situation1_4 />} /> 



            









           
          
           
            {/* <Route path='*' element={<Error />} /> */}

        </Routes>
        </BrowserRouter>
     );
  }
   
  export default Routing;