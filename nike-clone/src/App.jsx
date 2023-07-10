import React, { useState, useEffect } from 'react';
import './App.css';
import ProductDetails from './components/productdetails/ProductDetails';
import Homepage from './pages/HomePage';
import Landingpage from './pages/Landingpage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';
import CreateContainer from './components/homecontent/CreateContainer';
import { useStateValue } from './context/StateProvider';
import { getAllShoeItems } from './utils/FirebaseFunction';
import { actionType } from './context/reducer';

function App() {
   
  const [{ shoeItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllShoeItems().then(data => {
      dispatch({
        type: actionType.SET_SHOE_ITEMS, 
        shoeItems : data
      })
    })
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <>
      <div></div>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/details" element={<ProductDetails />} />
          <Route path="/add" element={<CreateContainer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
