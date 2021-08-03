import React from "react";
import { connect } from "react-redux";
import user_actions from "~/actions/user";
import todo_actions from "~/actions/todo";
import Todo from "./todo";
import "~/scss/bootstrap.scss";

const FetchButton = ({ action, name }) => (
	<button
		type="button"
		className="btn btn-primary me-3"
		onClick={action}
	>
		{name}
	</button>
);

const App = ({ fetchUsers, fetchTodos }) => (
	<div className="container mt-3">
		<FetchButton action={fetchUsers} name="Fetch Users" />
		<FetchButton action={fetchTodos} name="Fetch Todos" />
		<Todo.List per={10} />
	</div>
);

const mdtp = (dispatch) => ({
	fetchUsers: async (e) => {
		e.target.disabled = true;
		const response = await fetch("https://jsonplaceholder.typicode.com/users");
		const data = await response.json();
		dispatch(user_actions.seed(data));
		e.target.disabled = false;
	},
	fetchTodos: async (e) => {
		e.target.disabled = true;
		const response = await fetch("https://jsonplaceholder.typicode.com/todos");
		const data = await response.json();
		dispatch(todo_actions.seed(data));
		e.target.disabled = false;
	},
});

export default connect(null, mdtp)(App);
