import {combineReducers, createStore} from "redux";
import postsReducer from "./postsReducerc";


let reducers = combineReducers({
    postsPage: postsReducer
});

let store = createStore(reducers);

export default store;