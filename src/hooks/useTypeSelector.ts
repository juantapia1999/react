import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/reducer/combine";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;