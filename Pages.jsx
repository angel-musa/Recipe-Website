import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import {Route, Routes} from 'react-router-dom'; 
import Searched from './Searched';
import Details from './Details';

function Pages() {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/cuisine/:type" element={<Cuisine />} /> 
       <Route path = "/searched/:search" element={<Searched />} />
       <Route path = "/details/:name" element={<Details />} />
    </Routes>
  ); 
}

export default Pages