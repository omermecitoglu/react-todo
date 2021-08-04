import React from "react";
import { connect } from "react-redux";
import actions from "~/actions/todo";
import TodoItem from "./item";
import Modal from "./modal";
import Pagination from "../pagination";

const TodoList = ({ users, todos, page, per, setPage, sort, sorted, reversed }) => (
	<div>
		<table className="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Title</th>
					<th scope="col">Assignee</th>
					<th scope="col" onClick={() => sort("completed", sorted === "completed" && !reversed)}>
						Status
						{sorted === "completed" && !reversed && "\u2304"}
						{sorted === "completed" && reversed && "\u2303"}
					</th>
					<th scope="col">Actions</th>
				</tr>
			</thead>
			<tbody>
				{todos.slice(per*page, per*page+per).map((todo) =>
					<TodoItem
						key={todo.id}
						{...todo}
						user={users.find(u=>u.id===todo.userId)}
					/>,
				)}
			</tbody>
		</table>
		<Pagination
			length={todos.length}
			page={page}
			per={per}
			action={setPage}
		/>
		<Modal />
	</div>
);

const mstp = ({ user, todo }) => ({
	users: user.list,
	todos: todo.list,
	page: todo.page,
	sorted: todo.sorted,
	reversed: todo.reversed,
});

const mdtp = (dispatch) => ({
	setPage: (e, page) => {
		e.preventDefault();
		dispatch(actions.setPage(page));
	},
	sort: (field, reverse) => {
		console.log(field, reverse);
		dispatch(actions.sort(field, reverse));
	},
});

export default connect(mstp, mdtp)(TodoList);
