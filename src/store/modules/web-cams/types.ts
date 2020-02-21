import {WebCamsItem} from "../../../types/web-cams";

/**
 * State of WebCams
 */
export interface State {
    items: WebCamsItem[];
    total: number;
}
