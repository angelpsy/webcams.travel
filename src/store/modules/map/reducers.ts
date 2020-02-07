import {Reducer} from "redux";
import {Actions, MAP_CHANGE_COORDINATES, MAP_CHANGE_ZOOM} from "./actions";
import {State} from "./types";

const mapDefaultState: State = {
    zoom: 13,
    coordinates: {
        lat: 51.505,
        lng: -0.09,
    },
};

const mapReducer: Reducer<State, Actions> = (state = mapDefaultState, action) => {
    switch (action.type) {
        case MAP_CHANGE_COORDINATES:
            return {
                ...state,
                coordinates: action.payload.coordinates,
            };
        case MAP_CHANGE_ZOOM:
            return {
                ...state,
                zoom: action.payload.zoom,
            };
        default:
            return state;
    }
};

export default mapReducer;
