import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";


export default function AllRoutes() {
    return (
         <Routes>
           <Route to="/" element={ <Home />}></Route>
     
         
         </Routes>
    );
 
}
