import React from "react";
import "./Global.less";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Bowling from "./components/Bowling";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/bowling" component={Bowling}/>
      </Router>
    </div>
  );
}

export default App;
