import {combineReducers, Reducer} from "redux";
import { connectRouter} from "connected-react-router";
import { History } from "history";
import {Status} from "./types";
import {CHANGE_STATUS, ChangeStatusAction} from "./actions";
import {RootState} from "./types";
import map from "./modules/map/reducers";
import webCams from "./modules/web-cams/reducers";

export interface AppState {
    status: Status;
}

const appDefaultState = {
    status: Status.NULL,
};

type AppActions = ChangeStatusAction;

const app: Reducer<AppState, AppActions> = (state = appDefaultState, action) => {
    switch (action.type) {
        case CHANGE_STATUS:
            return {
                ...state,
                state: action.payload
            };
        default:
            return state;
    }
};

const createRootReducer = ({history}: {history: History}): Reducer<RootState> => combineReducers({
    router: connectRouter(history),
    app,
    map,
    webCams,
});

export default createRootReducer;
