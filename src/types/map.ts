export type Coordinates = {
    lat: number;
    lng: number;
};

export type Zoom = number;

export type GoogleMapChangeRequest = {
    zoom: Zoom;
    center: Coordinates;
}
