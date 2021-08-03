import React from "react";

const TodoItem = ({ id, userId, title, completed }) => (
	<tr>
		<th scope="row">{id}</th>
		<td>{title}</td>
		<td>{userId}</td>
		<td>{status ? "Done" : "In Progress"}</td>
		<td>&nbsp;</td>
	</tr>
);

export default TodoItem;
