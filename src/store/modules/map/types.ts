import {Coordinates, Zoom, Bounds} from "../../../types/map";

/**
 * State of map
 */
export interface State {
    zoom: Zoom;
    coordinates: Coordinates;
    bounds: Bounds | null;
}

export {Coordinates, Zoom, Bounds};
