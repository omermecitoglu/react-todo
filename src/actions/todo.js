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
	remove: (todoId) => ({
		type: "REMOVE_TODO",
		todoId,
	}),
};
