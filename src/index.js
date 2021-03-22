import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import "react-jinke-music-player/assets/index.css";
import {BrowserRouter as Router, Switch,Route,} from "react-router-dom";
import test from './composants/test';
import PageNotFound from './composants/pageNotFound';


ReactDOM.render(

  <React.StrictMode className="h-100 d-inline-block">
    <Router>
  <Switch>
    <Route exact path="/" component={test}/>
    <Route exact path="/itunes" component={App}/>
    <Route component={PageNotFound}/>
    {/* <Route path="/itunes/:id" component={DetailsMusic} /> */}
  </Switch>
</Router>
 </React.StrictMode>,
  document.getElementById('root')
);




reportWebVitals();