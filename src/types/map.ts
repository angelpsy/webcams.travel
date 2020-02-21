export type Coordinates = {
    lat: number;
    lng: number;
};

export type Zoom = number;

export type Bounds = {
    nw: Coordinates;
    se: Coordinates;
    sw: Coordinates;
    ne: Coordinates;
}

export type GoogleMapChangeRequest = {
    zoom: Zoom;
    center: Coordinates;
    bounds: Bounds;
}
