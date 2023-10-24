import { combineReducers } from 'redux';
//import imageReducer from './images';
import loginReducer from './login';
const reducer = combineReducers({
    login: loginReducer,
});
const rootReducer = (state, action) => {
    let stateTemp = state;
    if (action.type === "RESET_INITIAL") {
        stateTemp = undefined;
    }
    return reducer(stateTemp, action);
};

export default rootReducer;
