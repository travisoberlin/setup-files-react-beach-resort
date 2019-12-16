import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {BrowserRouter as Router} from 'react-dom';

import Home from "./pages/Home";
import Home from "./pages/error";
import Home from "./pages/Property";
import Home, { Rentals } from "./pages/Rentals";
import Property from './pages/Property';



function App() {
  return (
    <>
    <Home />
    <error />
    <Rentals />
    <Property />
    </>
  );
}

export default App;
