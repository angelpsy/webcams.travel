import {RootState as RootState} from "../../types";
import {WebCamsItem} from "../../../types/web-cams";

export const getWebCams = (state: RootState): WebCamsItem[] => state.webCams.items;
