import {AppState} from "./reducers";
import {RouterState} from "connected-react-router";
import {State as MapState} from "./modules/map/types";
import {State as WebCamsState} from "./modules/web-cams/types";

/**
 * Общий State
 */
export interface RootState {
    app: AppState;
    router: RouterState;
    map: MapState;
    webCams: WebCamsState;
}

export type GetRootState = () => RootState;

export enum Status {
    /**
     * Отсутствует статус - дефолтное значение перед инициализацией
     */
    NULL = "null",
    /**
     * Модуль инициализирован - с ним начата работа
     */
    INIT = "init",
    /**
     * Модуль очищен или с ним закончили работать,
     * перед установки статуса данные, связанные с этим модулем должны быть удалены
     */
    DESTROY = "destroy",
}
