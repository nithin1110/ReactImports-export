import React from "react";
import ReactDOM from "react-dom";
import pi from "./maths.js";
import { doublepi, triplepi } from "./maths.js";
ReactDOM.render(
  <div>
    <ul>
      <li>{pi}</li>
      <li>{doublepi()}</li>
      <li>{triplepi()}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
