export default {
	seed: (list) => ({
		type: "SEED_TODO_LIST",
		list,
	}),
	setPage: (page) => ({
		type: "SET_TODO_PAGE",
		page,
	}),
};
