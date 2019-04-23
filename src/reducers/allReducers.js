import {combineReducers} from "redux";
import numberReducer from "./numberReducer";
import spinnerReducer from "./spinnerReducer";


const allReducers=combineReducers({
    number:numberReducer,
    spinner:spinnerReducer
});

export default allReducers;