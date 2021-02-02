import React from "react";
import ReactDOM from "react-dom";
import ListCinemas from "./page/ListCinemas";
import { store } from "./state";
import "./style.css"

ReactDOM.render(<ListCinemas store={store} />, document.getElementById("root"));
