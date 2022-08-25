//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Glow from "./component/trafficLight.jsx";

//render your react application
ReactDOM.render( < Glow / > , document.querySelector("#app"));