import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import invariant from "redux-immutable-state-invariant";
import allReducers from "./reducers";
import allActions from "./actions";

export default function initializeStore(preloadedState) {
	// setting up middleware that allows the dev tool extension ""redux-devtools" to work: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
	const composeEnhancers = composeWithDevTools({
		allActions,
		trace: true,
		traceLimit: 25
	});
	// this is the basic createStore by Redux, where you have to pass in a reducer at minimum
	const store = createStore(allReducers, preloadedState, composeEnhancers(applyMiddleware(invariant(), thunk)));

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept("./reducers", () => {
			store.replaceReducer(require("./reducers").default);
		});
	}

	return store;
}
