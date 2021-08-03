const defaults = {
	list: [],
};

export default (state = defaults, action) => {
	switch(action.type) {
		case "SEED_TODO_LIST":
			return {
				...state,
				list: action.list,
			};
		case "RESET_TODOS":
			return defaults;
		default:
			return state;
	}
};
