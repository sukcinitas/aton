import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import App from "./App";

axios.defaults.baseURL = "https://peterisratnieks.id.lv";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
