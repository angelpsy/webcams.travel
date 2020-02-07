import {ActionCreator, Action} from "redux";
import {Status} from "./types";

export const CHANGE_STATUS = "CHANGE_STATUS";

export interface ChangeStatusAction extends Action {
    payload: Status;
}

export const initActionCreator: ActionCreator<ChangeStatusAction> = () => ({
    type: CHANGE_STATUS,
    payload: Status.INIT,
});
