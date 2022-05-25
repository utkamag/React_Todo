
import { legacy_createStore as createStore} from "redux";
import {reducer} from "./DataReducer";



//Глобальный store


export const store = createStore(reducer)
