import {ActionCreator, Action, Dispatch } from "redux";
import {ThunkAction} from "redux-thunk";
import {Coordinates, Zoom, Bounds} from "./types";
import {GetRootState, RootState} from "../../types";
import {getLocation, replace} from "connected-react-router";
import {getCoordinates, getZoom} from "./selectors";

export const MAP_CHANGE_COORDINATES = "MAP_CHANGE_COORDINATES";
export const MAP_CHANGE_ZOOM = "MAP_CHANGE_ZOOM";
export const MAP_CHANGE_BOUNDS = "MAP_CHANGE_BOUNDS";


interface ChangeCoordinatesAction extends Action<typeof MAP_CHANGE_COORDINATES> {
    payload: {
        coordinates: Coordinates;
    };
}

interface ChangeZoomAction extends Action<typeof MAP_CHANGE_ZOOM> {
    payload: {
        zoom: Zoom;
    };
}

interface ChangeBoundsAction extends Action<typeof MAP_CHANGE_BOUNDS> {
    payload: {
        bounds: Bounds;
    };
}

export type Actions = ChangeCoordinatesAction | ChangeZoomAction | ChangeBoundsAction;

export const changeCoordinatesActionCreator:
    ActionCreator<ThunkAction<any, RootState, any, ChangeCoordinatesAction>>
    = (coordinates: Coordinates) => (dispatch, getState: GetRootState) => {
    const location = getLocation(getState());
    // @ts-ignore
    dispatch(replace({
        pathname: location.pathname,
        // @ts-ignore
        search: "?" + new URLSearchParams({...location.query, ...coordinates}).toString()
    }));
    dispatch({
        type: MAP_CHANGE_COORDINATES,
        payload: {
            coordinates,
        },
    });
};


export const changeZoomActionCreator:
    ActionCreator<ThunkAction<any, RootState, any, ChangeZoomAction>>
    = (zoom: Zoom) => (dispatch, getState: GetRootState) => {
    const location = getLocation(getState());
    // @ts-ignore
    dispatch(replace({
        pathname: location.pathname,
        // @ts-ignore
        search: "?" + new URLSearchParams({...location.query, zoom}).toString()
    }));
    dispatch({
        type: MAP_CHANGE_ZOOM,
        payload: {
            zoom,
        },
    });
};

export const boundsActionActionCreator: ActionCreator<ChangeBoundsAction> = (bounds: Bounds) => ({
    type: MAP_CHANGE_BOUNDS,
    payload: {
        bounds,
    }
});

export const initActionCreator:
    ActionCreator<ThunkAction<any, RootState, void, Actions>>
    = () => (dispatch: Dispatch, getState: GetRootState) => {
    const state = getState();
    const location = getLocation(state);
    const coordinatesDefault = getCoordinates(state);
    const zoomDefault = getZoom(state);
    const {
        lng = coordinatesDefault.lng,
        lat = coordinatesDefault.lat,
        zoom = zoomDefault,
    // @ts-ignore
    } = location.query;
    dispatch(changeCoordinatesActionCreator({lat: +lat, lng: +lng}) as any);
    dispatch(changeZoomActionCreator(+zoom) as any);
};
