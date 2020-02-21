import instance from "./instance";
import {Bounds} from "../../types/map";
import {WebCamsItem} from "../../types/web-cams";
import {AxiosPromise} from "axios";

// https://rapidapi.com/webcams.travel/api/webcams-travel?endpoint=5582bd4de4b09ec98bb31948
interface ParamsBbox {
    /**
     * North-east WGS84 longitude of the bounding box.
     */
    ne_lng: number;
    /**
     * South-west WGS84 latitude of the bounding box.
     */
    sw_lat: number;
    /**
     * South-west WGS84 longitude of the bounding box.
     */
    sw_lng: number;
    /**
     * North-east WGS84 latitude of the bounding box.
     */
    ne_lat: number;
}

interface ParamsLimit {
    limit: number;
    offset: number;
}

interface PropsGetWebCamsList {
    bounds: Bounds,
    per_page?: number,
    page?: number,
}

interface Request {
    status: string;
    result: object;
}

interface RequestGetWebCamsList extends Request {
    result: {
        offset: number;
        limit: number;
        total: number;
        webcams: WebCamsItem[];
    }
}

interface Api {
    getWebCamsList(props: PropsGetWebCamsList): Promise<RequestGetWebCamsList>;
}

const ApiWebCams: Api = {
    getWebCamsList({bounds, per_page = 15, page = 0}) {
        const paramsBbox: ParamsBbox = {
            ne_lat: bounds.ne.lat,
            ne_lng: bounds.ne.lng,
            sw_lat: bounds.sw.lng,
            sw_lng: bounds.sw.lng,
        };
        const paramsLimit: ParamsLimit = {
            limit: per_page,
            offset: page * per_page,
        };
        return instance
            .get(`list/\
bbox=${paramsBbox.ne_lat},${paramsBbox.ne_lng},${paramsBbox.sw_lat},${paramsBbox.sw_lng}\
/limit=${paramsLimit.limit},${paramsLimit.offset}`, {
                params: {
                    show: "webcams:image,location",
                },
            })
            .then(data => data.data);
    },
};

export default ApiWebCams;
