import React from 'react';
import NavBar from './components/Navbar';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ResponsiveAppBar from './components/ResponsiveNav';



function App() {
  return (
    <div className="App">
      <CssBaseline />
      <ResponsiveAppBar />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
