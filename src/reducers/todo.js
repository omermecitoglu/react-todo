const defaults = {
	list: [],
	page: 0,
};

export default (state = defaults, action) => {
	switch(action.type) {
		case "SEED_TODO_LIST":
			return {
				...state,
				list: action.list,
			};
		case "SET_TODO_PAGE":
			return {
				...state,
				page: action.page,
			};
		case "RESET_TODOS":
			return defaults;
		default:
			return state;
	}
};
