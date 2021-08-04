import React from "react";
import { connect } from "react-redux";
import actions from "~/actions/todo";
import { Modal } from "bootstrap";

const ActionButton = ({ name, action, type }) => (
	<button type="button" className={"btn btn-" + type + " me-3"} onClick={action}>{name}</button>
);

const TodoItem = ({ id, user, title, completed, edit, destroy }) => (
	<tr>
		<th scope="row">{id}</th>
		<td>{title}</td>
		<td>{user?.name || "???"}</td>
		<td>{completed ? "Done" : "In Progress"}</td>
		<td>
			<ActionButton name="Edit" action={edit} type="primary" />
			<ActionButton name="Delete" action={destroy} type="danger" />
		</td>
	</tr>
);

const mdtp = (dispatch, ownProps) => ({
	edit: (e) => {
		e.preventDefault();
		const modal = new Modal(document.getElementById("todoModal"), {});
		modal.show();
		dispatch(actions.edit(ownProps.id));
	},
	destroy: async (e) => {
		e.target.disabled = true;
		const response = await fetch("https://jsonplaceholder.typicode.com/todos/" + ownProps.id, { method: "DELETE" });
		if(response.status === 200) {
			dispatch(actions.remove(ownProps.id));
		}
	},
});

export default connect(null, mdtp)(TodoItem);
