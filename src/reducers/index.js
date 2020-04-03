import counter from "./counterReducer";
import currentUser from "./userReducer";
import { combineReducers } from "redux";
import popularMovies from "./popularReducer";

const rootReducer = combineReducers({ counter, currentUser, popularMovies });

export default rootReducer;
