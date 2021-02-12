import { combineReducers } from 'redux';
import { USER_DATA, RESET_ACTION } from '../actions/app.actions';

const initialState = {
    canUserLogin: false,
    user_id: false,
};

function appReducer(state = initialState, action) {
    console.warn("App reducer invoked with state: " + JSON.stringify(state) + " with action " + JSON.stringify(action));

    switch (action.type) {
        case USER_DATA:
            console.log('Reducer: STORE_USER_DATA')
            return {
                ...state,
                canUserLogin: action.canUserLogin,
                user_id: action.user_id
            };
        case "RESET_REDUX":
            console.log('Reducer: RESET_REDUX')
            return initialState; //Always return the initial state
        default:
            return state;
    }
}

export default combineReducers({ appReducer });



