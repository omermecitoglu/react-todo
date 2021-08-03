const defaults = {
	list: [],
};

export default (state = defaults, action) => {
	switch(action.type) {
		case "SEED_USERS":
			return {
				...state,
				list: action.list,
			};
		case "RESET_USERS":
			return defaults;
		default:
			return state;
	}
};
