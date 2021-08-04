export default {
	seed: (list) => ({
		type: "SEED_TODO_LIST",
		list,
	}),
	sort: (field, reverse) => ({
		type: "SORT_TODO_LIST",
		field,
		reverse,
	}),
	setPage: (page) => ({
		type: "SET_TODO_PAGE",
		page,
	}),
	edit: (todoId) => ({
		type: "EDIT_TODO",
		todoId,
	}),
	update: (todoId, title, completed) => ({
		type: "UPDATE_TODO",
		todoId,
		title,
		completed,
	}),
	remove: (todoId) => ({
		type: "REMOVE_TODO",
		todoId,
	}),
};
