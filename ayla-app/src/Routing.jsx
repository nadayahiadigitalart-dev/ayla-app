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
import SituationOne from './pages/SituationOne';
import SituationOneTwo from './pages/SituationOneTwo';
import SituationOneThree from './pages/SituationOneThree';
import SituationOneFour from './pages/SituationOneFour';
import FeedBack from './pages/FeedBack';
import PodcastPage from './pages/PodcastPage';
import Community from './pages/Community';
import Experts from './pages/Experts';
import Premium from './pages/Premium';





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
            <Route path='/situation1' element={<SituationOne />} />
            <Route path='/situation1_2' element={<SituationOneTwo />} />
            <Route path='/situation1_3' element={<SituationOneThree />} />
            <Route path='/situation1_4' element={<SituationOneFour />} /> 
            <Route path='/feedback' element={<FeedBack />} /> 
            <Route path='/podcast' element={<PodcastPage />} /> 
            <Route path='/community' element={<Community />} /> 
            <Route path='/experts' element={<Experts />} />
              <Route path='/premium' element={<Premium />} />







            









           
          
           
            {/* <Route path='*' element={<Error />} /> */}

        </Routes>
        </BrowserRouter>
     );
  }
   
  export default Routing;