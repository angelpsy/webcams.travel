import {combineReducers, Reducer} from "redux";
import { connectRouter} from "connected-react-router";
import { History } from "history";
import {Status} from "./types";
import {CHANGE_STATUS, ChangeStatusAction} from "./action";
import {State} from "./types";

export interface AppState {
    status: Status;
}

const appDefaultState = {
    status: Status.NULL,
};

type AppAction = ChangeStatusAction;

const app: Reducer<AppState, AppAction> = (state = appDefaultState, action) => {
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

const createRootReducer = ({history}: {history: History}): Reducer<State> => combineReducers({
    router: connectRouter(history),
    app,
});

export default createRootReducer;
