import {ADD_TYPE, DEL_TYPE, UPDATE_TYPE} from './action'

export default (state=[], action) => {
    switch (action.type){
        case ADD_TYPE:
            return [...state, action.item];

        case UPDATE_TYPE:
        	let newUpState = state.map( (item) => {
        		if(item.id == action.item.id){
        			item.done = action.item.done;
        		}
        		return item;
        	})
            return newUpState;

        case DEL_TYPE:
        	let newDelState = state.filter( (item) => {
        		if(item.id == action.id){
        			return false
        		}
        		return true;
        	})
            return newDelState;

        default:
            return state;
    }
}

// export default reducer;
