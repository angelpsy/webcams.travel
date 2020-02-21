import {Reducer} from "redux";
import {State} from "./types";
import {Actions} from "./actions";
import {
    WEB_CAMS_FETCH,
    WEB_CAMS_FETCH_FAIL,
    WEB_CAMS_SET_ITEMS,
} from "./actions";

const mapDefaultState: State = {
    items: [],
    total: 0,
};

const mapReducer: Reducer<State, Actions> = (state = mapDefaultState, action) => {
    switch (action.type) {
        case WEB_CAMS_SET_ITEMS:
            return {
                ...state,
                items: action.payload.items,
                total: action.payload.total,
            };
        case WEB_CAMS_FETCH:
        case WEB_CAMS_FETCH_FAIL:
        default:
            return state;
    }
};

export default mapReducer;
