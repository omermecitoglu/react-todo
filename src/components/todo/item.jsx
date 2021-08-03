import React from "react";

const TodoItem = ({ id, user, title, completed }) => (
	<tr>
		<th scope="row">{id}</th>
		<td>{title}</td>
		<td>{user?.name || "???"}</td>
		<td>{completed ? "Done" : "In Progress"}</td>
		<td>&nbsp;</td>
	</tr>
);

export default TodoItem;
