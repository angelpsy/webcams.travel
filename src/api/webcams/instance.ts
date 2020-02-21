import axios, {AxiosInstance} from "axios";

const HOST = process.env.APP_RAPIDAPI_WEB_CAMS_HOST;
const BASE_URL = process.env.APP_RAPIDAPI_WEB_CAMS_BASE_URL;
const KEY = process.env.APP_RAPIDAPI_WEB_CAMS_KEY;

const instance: AxiosInstance = axios.create({
    baseURL: BASE_URL + "webcams/",
    timeout: 1000,
    headers: {
        "x-rapidapi-host": HOST,
        "x-rapidapi-key": KEY,
    }
});

export default instance;
