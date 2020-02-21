import {ActionCreator, Action, Dispatch } from "redux";
import {ThunkAction} from "redux-thunk";
import {GetRootState, RootState} from "../../types";
import {WebCamsItem} from "../../../types/web-cams";
import {Bounds, Zoom} from "../map/types";
import ApiWebCams from "../../../api/webcams";

export const WEB_CAMS_FETCH = "WEB_CAMS_FETCH";
export const WEB_CAMS_FETCH_FAIL = "WEB_CAMS_FETCH_FAIL";
export const WEB_CAMS_SET_ITEMS = "WEB_CAMS_SET_ITEMS";

interface WebCamsFetchAction extends Action<typeof WEB_CAMS_FETCH> {
    payload: {
        bounds: Bounds;
    };
}

interface WebCamsFetchFailAction extends Action<typeof WEB_CAMS_FETCH_FAIL> {
    payload: {
        error: any;
    };
}

interface WebCamsSetItemsAction extends Action<typeof WEB_CAMS_SET_ITEMS> {
    payload: {
        items: WebCamsItem[];
        total: number;
    };
}

export type Actions = WebCamsFetchAction | WebCamsFetchFailAction | WebCamsSetItemsAction;

export const fetchWebCamsActionCreator:
    ActionCreator<ThunkAction<any, RootState, any, Actions>>
    = (bounds: Bounds, zoom: Zoom) => async (dispatch, getState: GetRootState) => {
    dispatch({
        type: WEB_CAMS_FETCH,
        payload: {
            bounds,
        }
    });
    try {
        const result = await ApiWebCams.getWebCamsList({bounds})
            .then(data => data.result);
        dispatch({
            type: WEB_CAMS_SET_ITEMS,
            payload: {
                items: result.webcams,
                total: result.total,
            },
        });
        return result;
    } catch (error) {
        dispatch({
            type: WEB_CAMS_FETCH_FAIL,
            payload: {
                error,
            },
        });
        throw Error(error);
    }
};
