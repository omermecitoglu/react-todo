import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

const body = document.getElementsByTagName("body")[0];
const root = document.createElement("div");
root.id = "root";
body.prepend(root);
ReactDOM.render(<App />, root);
