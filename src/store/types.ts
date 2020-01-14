import {AppState} from "./reducers";
import {RouterState} from "connected-react-router";

/**
 * Общий State
 */
export interface State {
    app: AppState;
    router: RouterState;
}

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
