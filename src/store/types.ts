import {State as RootState} from "./reducers";

/**
 * Общий State
 */
export interface State {
    root: RootState;
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
