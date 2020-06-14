import React from "react";
<<<<<<< HEAD:employeedirectory/src/components/Hero.js
import Home from "../pages/home";
import "./index.css";
=======
// import backgroundImage from '../pages/business-company-working.jpg';
import "./style.css";
>>>>>>> 6e5ba15c32fab9df90de9b40769cee3e9735240b:src/components/Hero/index.js

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Hero;
