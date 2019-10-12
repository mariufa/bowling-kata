import React from "react";
import "./Global.less";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Node from "./components/Node";
import Java from "./components/Java";
import Python from "./components/Python";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/node" component={Node}/>
        <Route path="/java" component={Java}/>
        <Route path="/python" component={Python}/>
      </Router>
    </div>
  );
}

export default App;
