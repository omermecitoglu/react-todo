import React from "react";
import ReactDOM from "react-dom";

const App = () => (
	<span>Hello World</span>
);

const body = document.getElementsByTagName("body")[0];
const root = document.createElement("div");
root.id = "root";
body.prepend(root);

ReactDOM.render(<App />, root);
