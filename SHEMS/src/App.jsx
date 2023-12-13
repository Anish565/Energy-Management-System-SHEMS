import { useState, useEffect } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Login } from './components/Login.jsx'
import { Register } from './components/Register.jsx';
import { DeviceRegister } from './components/DeviceRegister.jsx';
import { Graph1 } from './components/Graph1.jsx';
import { Graph2 } from './components/Graph2.jsx';
import { Graph3 } from './components/Graph3.jsx';
import { Graph4 } from './components/Graph4.jsx';

import { Home } from "./components/Home.jsx";
import { HeaderElement } from './components/ui/HeaderElement';
import { ProtectedRoute } from "./components/utils/ProtectedRoute"
import { Location } from './components/ServiceLocation.jsx';
import { Profile } from './components/Profile.jsx';
import { ManageServiceLoc } from './components/ManageServiceLoc.jsx';


function App() {
  

  // function getCustomers(){
  //   fetch('http://localhost:3001')
  //     .then(response => {
  //       return response.text();
  //     })
  //     .then(data => {
  //       setCustomers(data);
  //     })
  // }

  // function createCustomers(){

  // }

  return (
    <>
      <Router>
      <HeaderElement />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}/>
            <Route path="/deviceRegister" element={<DeviceRegister />} />
            <Route path="/locationRegister" element={<Location/>}/>
            <Route path="/graphs/graph1" element={<Graph1/>} />
            <Route path="/graphs/graph2" element={<Graph2/>} />
            <Route path="/graphs/graph3" element={<Graph3/>} />
            <Route path="/graphs/graph4" element={<Graph4/>} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path='/manageService' element={<ManageServiceLoc/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
