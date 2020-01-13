import {ActionCreator, Action} from "redux";
import {Status} from "./types";

export const CHANGE_STATUS = "CHANGE_STATUS";

export interface ActionChangeStatus extends Action {
    payload: Status;
}

export const initActionCreator: ActionCreator<ActionChangeStatus> = () => ({
    type: CHANGE_STATUS,
    payload: Status.INIT,
});
