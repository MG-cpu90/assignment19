import React from "react";
import backgroundPic from './business-company-working.jpg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD:employeedirectory/src/App.js
import Table from "./components/table";
import Home from "./pages/home";
import Hero from "./components/hero";
import Wrapper from "./components/wrapper";
=======
import Table from "./components/Table";
import Home from "./pages/home";
import Hero from "./components/Table";
import Wrapper from "./components/Wrapper";
>>>>>>> 6e5ba15c32fab9df90de9b40769cee3e9735240b:src/App.js

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
