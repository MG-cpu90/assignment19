import React from "react";
import backgroundPic from './business-company-working.jpg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Table from "./components/Table";
import Home from "./pages/Home";
import Hero from "./components/Table";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <Wrapper>
        <div>
        <Route exact path="/" component={Home} />
        </div>
      </Wrapper>
    </Router>
  );
}

export default App;
