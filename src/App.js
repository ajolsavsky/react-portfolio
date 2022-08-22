//React packages
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//MUI packagaes
import CssBaseline from '@mui/material/CssBaseline';

//Pages and Components
import homePage from "./Pages/Homepage"
import NavBar from './components/Navbar';
import ResponsiveAppBar from './components/ResponsiveNav';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
      <ResponsiveAppBar />
      <Switch>
        <Route path='/' exact component={homePage}/>
      </Switch>
      <About />
      <Portfolio />
      </Router>
    </div>
  );
}

export default App;
