import {RootState as RootState} from "../../types";
import {Coordinates, Zoom} from "../../../types/map";

export const getCoordinates = (state: RootState): Coordinates => state.map.coordinates;
export const getZoom = (state: RootState): Zoom => state.map.zoom;
