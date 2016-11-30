export const ADD_TYPE = "ADD_TODO";
export const DEL_TYPE = "DEL_TODO";
export const UPDATE_TYPE = "UPDATE_TODO";

export const createAddAction = ( item ) => {
	return {
		type: ADD_TYPE,
		item: item
	}
};

export const createDelAction = ( { id } ) => {
	return {
		type: DEL_TYPE,
		id: id
	}
};

export const createUpdateAction = (item) => {
	return {
		type: UPDATE_TYPE,
		item: item
	}
};

// export const addAction = {
// 	type: "ADD_TODO",
// 	item: item
// }