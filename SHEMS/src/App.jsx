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
import { DisplayComponent } from './components/DisplayComponent.jsx';
import { Home } from "./components/Home.jsx";
import { HeaderElement } from './components/ui/HeaderElement';
import { ProtectedRoute } from "./components/utils/ProtectedRoute"


function App() {
  const [customrers, setCustomers] = useState(false);

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
          <Route element={<ProtectedRoute />}>
            <Route path="/deviceRegister" element={<DeviceRegister />} />
            <Route path="/graphs" element={<DisplayComponent />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
