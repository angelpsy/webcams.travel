import {Coordinates, Zoom} from "../../../types/map";

/**
 * State of map
 */
export interface State {
    zoom: Zoom;
    coordinates: Coordinates;
}

export {Coordinates, Zoom};
