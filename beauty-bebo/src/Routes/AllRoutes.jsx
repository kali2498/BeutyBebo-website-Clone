import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Compoents/Login";
import Signup from "../Compoents/Signup";

import Home from "../Pages/Home";


export default function AllRoutes() {
    return (
         <Routes>
           <Route to="/" element={ <Home />}></Route>
          <Route to="/signup" element={<Signup/>}></Route>
           <Route to="/login" element={ <Login />}></Route>
         </Routes>
    );
 
}
