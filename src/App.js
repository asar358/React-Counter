import React from 'react';
import About from "./About"
import NavBar from "./Navbar"
import Counter from "./Counter"
import "./index.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
      <Route path="/counter" component = {Counter}/>
      <Route path="/about" component = {About}/>
      
    </div>
    </Router>
  );
}

export default App;
