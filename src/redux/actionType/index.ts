import Usuario from "../../interfaces/Usuario";

export enum ActionType {
    GET_POST_USUARIOS_PENDING = "GET_POST_USUARIOS_PENDING",
    GET_POST_USUARIOS_SUCCESS = "GET_POST_USUARIOS_SUCCESS",
    GET_POST_USUARIOS_FAIL = "GET_POST_USUARIOS_FAIL"
}

interface actionPending {
    type: ActionType.GET_POST_USUARIOS_PENDING;
}

interface actionSuccess {
    type: ActionType.GET_POST_USUARIOS_SUCCESS;
    payload: Usuario[];
}

interface actionFail {
    type: ActionType.GET_POST_USUARIOS_FAIL;
    payload: any;
}

export type Action = actionPending | actionSuccess | actionFail;

