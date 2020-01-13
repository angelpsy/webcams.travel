import * as React from "react";
import * as ReactDom from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension/logOnlyInProduction"
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import reducer from "./store/reducers";
import App from "./app";

const composeEnhancers = composeWithDevTools({});

const middleware = [ thunk ];
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middleware)),
);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root"));
