import counter from "./counterReducer";
import currentUser from "./userReducer";
import { combineReducers } from "redux";
import popularMovies from "./popularReducer";
import images from "./imageReducer";

const rootReducer = combineReducers({
  counter,
  currentUser,
  popularMovies,
  images
});

export default rootReducer;
