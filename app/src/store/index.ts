// this file was setup with redux-persist and redux devtools for Chrome
// redux-persist: https://github.com/rt2zz/redux-persist#basic-usage
// redux devtools for chrome: https://github.com/reduxjs/redux-devtools

import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";
import invariant from "redux-immutable-state-invariant";
import rootReducer from "./reducers";
import * as actionCreators from "./actions/counter";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
	key: "root",
	storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(preloadedState) {
	const composeEnhancers = composeWithDevTools({
		actionCreators,
		trace: true,
		traceLimit: 25
	});
	let store = createStore(persistedReducer, preloadedState, composeEnhancers(applyMiddleware(invariant(), thunk)));
	let persistor = persistStore(store);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept("./reducers", () => {
			store.replaceReducer(require("./reducers").default);
		});
	}

	return { store, persistor };
}
