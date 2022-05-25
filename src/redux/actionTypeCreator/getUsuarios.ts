import { Dispatch } from "redux"
import UsuarioService from "../../services/UsuarioService";
import { Action, ActionType } from "../actionType"


export const getUsuarios = (id: number) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.GET_POST_USUARIOS_PENDING
        });

        try {
            const result = await UsuarioService.findById(id);
            dispatch({
                type: ActionType.GET_POST_USUARIOS_SUCCESS,
                payload: result
            });
        } catch (e: any) {
            dispatch({
                type: ActionType.GET_POST_USUARIOS_FAIL,
                payload: e?.message
            });
        }
    }
}