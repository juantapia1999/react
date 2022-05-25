import { Action, ActionType } from "../actionType";

const initialState = {
    usuarios: [],
    loading: false,
    error: null
}

interface Usuario {
    id?: any | null;
    nombre: string;
    apellido: string;
    telefono?: string;
    password?: string;
    email: string;
}

interface State {
    usuarios: Usuario[],
    loading: boolean,
    error: any | null
}

export const usuarioReducer = (state = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.GET_POST_USUARIOS_PENDING: {
            return {
                loading: true,
                usuarios: [],
                error: null
            }
        }
        case ActionType.GET_POST_USUARIOS_SUCCESS: {
            return {
                loading: false,
                usuarios: action.payload,
                error: null
            }
        }
        case ActionType.GET_POST_USUARIOS_FAIL: {
            return {
                loading: false,
                error: action.payload,
                usuarios: []
            }
        }
        default: {
            return state;
        }
    }
}

export default usuarioReducer;