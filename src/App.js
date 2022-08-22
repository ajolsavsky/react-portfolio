//React packages
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//MUI packagaes
import CssBaseline from '@mui/material/CssBaseline';

//Pages and Components
import homePage from "./Pages/Homepage"
import portfolioPage from './Pages/Portfolio';
import resumePage from './Pages/Resume';
import contactPage from './Pages/Contact';
import NavBar from './components/Navbar';
import ResponsiveAppBar from './components/ResponsiveNav';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
      <ResponsiveAppBar />
      <Switch>
        <Route path='/react-portfolio' exact component={homePage}/>
        <Route path='/react-portfolio/home' exact component={homePage}/>
        <Route path='/react-portfolio/work' exact component={portfolioPage}/>
        <Route path='/react-portfolio/resume' exact component={resumePage}/>
        <Route path='/react-portfolio/contact' exact component={contactPage}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
