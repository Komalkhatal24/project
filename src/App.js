
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";



function App() {

    return (
        <>
           <Routes>

        <Route  path="/" element={<Homepage/>} />
        <Route path="/LoginPage" element={<LoginPage/>} />
        <Route path="/register" element={<Register/>}/>
   
    </Routes>

            



        </>
    )



};
export default App;


