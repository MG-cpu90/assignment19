import React from "react";
import backgroundPic from './business-company-working.jpg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Table from "./components/table";
import Home from "./pages/home";
import Hero from "./components/hero";
import Wrapper from "./components/wrapper";

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
