import { combineReducers } from "redux";
import counter from "./counter";
import location from "./location";
import language from "./language";
import theme from "./theme";

const rootReducer = combineReducers({
	counter,
	location,
	language,
	theme
});

export default rootReducer;
