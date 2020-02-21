import {Middleware} from "redux";
import {MAP_CHANGE_BOUNDS} from "../map/actions";
import {RootState} from "../../types";
import {getBounds} from "../map/selectors";
import {fetchWebCamsActionCreator} from "./actions";

export const middlewareFetchWebCamsAfterChangeBounds:
    Middleware<any, RootState, any> = store => next => action => {
    if (action.type !== MAP_CHANGE_BOUNDS) {
        return next(action);
    }
    const result = next(action);
    const state = store.getState();
    const bounds = getBounds(state);
    store.dispatch(fetchWebCamsActionCreator(bounds));
    return result;
};
