import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Components/Home';
import Assessment from './Components/Assessment';
import Pharmacy from './Components/Pharmacy';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <div>
      <Router>
        <div>
            <Route path="/" exact component={Home} /> {/*For Homepage*/}
            <Route path="/Assessment" exact component={Assessment} /> {/*For Quick Assessment*/}
            <Route path="/FindStoreNearBy" exact component={Pharmacy} /> 
            <Route path="/AboutUs" exact component={AboutUs} /> 
        </div>
      </Router>
    </div>
  );
}

export default App;
