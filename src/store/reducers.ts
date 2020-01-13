import {combineReducers, Reducer} from "redux";
import {Status} from "./types";
import {CHANGE_STATUS, ActionChangeStatus} from "./action";

export interface State {
    status: Status;
}

const defaultStateRoot = {
    status: Status.NULL,
};

type RootAction = ActionChangeStatus;

const root: Reducer<State, RootAction> = (state = defaultStateRoot, action) => {
    switch (action.type) {
        case CHANGE_STATUS:
            return {
                ...state,
                status: action.payload
            };
        default:
            return state;
    }
};

const reducer = combineReducers({
    root,
});

export default reducer;
