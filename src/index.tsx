import * as React from "react";
import * as ReactDom from "react-dom";
import {Provider} from "react-redux";
import {ConnectedRouter} from "connected-react-router";

import configureStore, {history} from "./store/configureStore";

import App from "./app";

const store = configureStore();

ReactDom.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById("root"));
