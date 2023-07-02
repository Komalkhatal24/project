import Register from "./components/Register";
import React from 'react';
import {  Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Homepage from "./components/Homepage";
import CandidateSearch from "./components/CandidateSearch";



function App()
{
  
    return (
        <>
        <Routes>
        <Route path="/" element={<Homepage/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
         <Route path="/" element={<Homepage/>}/>
         <Route path="/CandidateSearch" element={<CandidateSearch/>}/>
           
        </Routes>
      
   
            
        </>
    )



};
export default App;
  

