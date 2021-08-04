function sort(list, key, reverse) {
	list.sort((a, b) => (a[key] - b[key]) * (reverse ? -1 : 1));
	return list;
}

const defaults = {
	list: [],
	page: 0,
	sorted: null,
	reversed: false,
	edit: null,
};

export default (state = defaults, action) => {
	switch(action.type) {
		case "SEED_TODO_LIST":
			return {
				...state,
				list: action.list,
				page: 0,
				sorted: null,
				reversed: false,
			};
		case "SORT_TODO_LIST":
			return {
				...state,
				list: sort(state.list, action.field, action.reverse),
				page: 0,
				sorted: action.field,
				reversed: action.reverse,
			};
		case "SET_TODO_PAGE":
			return {
				...state,
				page: action.page,
			};
		case "EDIT_TODO":
			return {
				...state,
				edit: state.list.find(t=>t.id===action.todoId),
			};
		case "UPDATE_TODO":
			return {
				...state,
				list: state.list.map(t=>t.id!==action.todoId ? t : {
					...t,
					title: action.title,
					completed: action.completed,
				}),
			};
		case "REMOVE_TODO":
			return {
				...state,
				list: state.list.filter(t=>t.id!==action.todoId),
			};
		case "RESET_TODOS":
			return defaults;
		default:
			return state;
	}
};
