import { combineReducers } from "redux";
import { usuarioReducer } from "./index";


const reducers = combineReducers({
    usuarios: usuarioReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>