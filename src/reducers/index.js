import counterReducer from "./counter";
import loggedReducer from "./Logged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counterReducer:counterReducer,
    loggedReducer:loggedReducer,
})

export default allReducers;