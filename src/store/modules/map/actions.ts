import {ActionCreator, Action, Dispatch } from "redux";
import {ThunkAction} from "redux-thunk";
import {Coordinates, Zoom} from "./types";
import {GetRootState, RootState} from "../../types";
import {getLocation, replace} from "connected-react-router";
import {getCoordinates, getZoom} from "./selectors";

export const MAP_CHANGE_COORDINATES = "MAP_CHANGE_COORDINATES";
export const MAP_CHANGE_ZOOM = "MAP_CHANGE_ZOOM";


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

export type Actions = ChangeCoordinatesAction | ChangeZoomAction;

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
