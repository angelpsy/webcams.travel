import {createBrowserHistory, createHashHistory} from "history";
import {applyMiddleware, createStore, Store} from "redux";
import {routerMiddleware} from "connected-react-router";
import createRootReducer from "./reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension/logOnlyInProduction";
import {State} from "./types";

import {TypeHistory} from "../types/app-config";

const TYPE_HISTORY: TypeHistory = process.env.TYPE_HISTORY as TypeHistory;

export const history = TYPE_HISTORY === TypeHistory.HASH ? createHashHistory() :
    createBrowserHistory();

const composeEnhancers = composeWithDevTools({});
const middleware = [ routerMiddleware(history), thunk ];

export default function configureStore(preloadedState?: State): Store<State> {
    return createStore(
        createRootReducer({history}),
        preloadedState,
        composeEnhancers(applyMiddleware(...middleware)),
    )
}
