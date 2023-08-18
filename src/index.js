import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css"; 
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Luxurious+Roman&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

ReactDOM.render(
  <Main/>, 
  document.getElementById("root")
);