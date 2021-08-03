import React from "react";
import { connect } from "react-redux";
import TodoItem from "./item";

const TodoList = ({ todos }) => (
	<table className="table">
		<thead>
			<tr>
				<th scope="col">#</th>
				<th scope="col">Title</th>
				<th scope="col">Assignee</th>
				<th scope="col">Status</th>
				<th scope="col">Actions</th>
			</tr>
		</thead>
		<tbody>
			{todos.map((todo) =>
				<TodoItem
					key={todo.id}
					{...todo}
				/>,
			)}
		</tbody>
	</table>
);

const mstp = ({ todo }) => ({
	todos: todo.list,
});

export default connect(mstp, null)(TodoList);
