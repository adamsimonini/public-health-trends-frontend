import * as counterActions from "./counter";
import * as locationActions from "./location";

const allActions = {
	...counterActions,
	...locationActions
};

export default allActions;
