import React from "react";
import ReactDOM from "react-dom";
import Routers from "./router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home/Home";
import "./default.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {StateProvider} from './components/stateManagement/store';

ReactDOM.render(
  <StateProvider>
    <Routers />
  </StateProvider>,
  document.getElementById("root")
);
