import {combineReducers, createStore} from "redux";
import usersReducer from "./postsReducerc";


let reducers = combineReducers({
    postsPage: usersReducer
});

let store = createStore(reducers);

export default store;