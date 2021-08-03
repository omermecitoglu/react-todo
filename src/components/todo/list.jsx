import React from "react";
import { connect } from "react-redux";
import TodoItem from "./item";

const TodoList = ({ users, todos }) => (
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
					user={users.find(u=>u.id===todo.userId)}
				/>,
			)}
		</tbody>
	</table>
);

const mstp = ({ user, todo }) => ({
	todos: todo.list,
	users: user.list,
});

export default connect(mstp, null)(TodoList);
