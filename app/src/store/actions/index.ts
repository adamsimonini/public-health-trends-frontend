import * as counterActions from "./counter";
import * as locationActions from "./location";
import * as languageActions from "./language";
import * as themeActions from "./theme";

const allActions = {
	...counterActions,
	...locationActions,
	...languageActions,
	...themeActions
};

export default allActions;
