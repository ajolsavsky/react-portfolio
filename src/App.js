import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      Hello all.
    </div>
  );
}

export default App;
