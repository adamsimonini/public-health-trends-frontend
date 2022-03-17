import { combineReducers } from "redux";
import counter from "./counter";
import lcoations from "./locations";

const rootReducer = combineReducers({
	counter,
	lcoations
});

export default rootReducer;
