import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Assessment from './Components/Assessment';

function App() {
  return (
    <div>
      <Router>
        <div>
            <Route path="/" exact component={Home} /> {/*For Homepage*/}
            <Route path="/Assessment" exact component={Assessment} /> {/*For Quick Assessment*/}
        </div>
      </Router>
           {/* <Home />
          </Route>

          <Route path="/Covid-Assessment"> For Quick Assessment
            <Header />
            <Assessment />
          </Route>
          <Route path="/FindStoreNearBy"> For Finding Store
            <Header />
            <Maps />
          </Route>
          <Route path="/AboutUS"> For webdevelopwes information
            <Header />
            <AboutUS />
          </Route>
          </Switch>
        </div>
      Header */}

    </div>
  );
}

export default App;
