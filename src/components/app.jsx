import React from "react";
import { connect } from "react-redux";
import todo_actions from "~/actions/todo";
import Todo from "./todo";
import "~/scss/bootstrap.scss";

const FetchButton = ({ action, name }) => (
	<button
		type="button"
		className="btn btn-primary"
		onClick={action}
	>
		{name}
	</button>
);

const App = ({ fetchTodos }) => (
	<div className="container">
		<FetchButton action={fetchTodos} name="Fetch Todos" />
		<Todo.List />
	</div>
);

const mdtp = (dispatch) => ({
	fetchTodos: async (e) => {
		e.target.disabled = true;
		const response = await fetch("https://jsonplaceholder.typicode.com/todos");
		const data = await response.json();
		dispatch(todo_actions.seed(data));
		e.target.disabled = false;
	},
});

export default connect(null, mdtp)(App);
