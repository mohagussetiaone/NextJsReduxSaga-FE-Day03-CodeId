import { combineReducers } from "redux";
import RegionReduce from "./regionReducer";
import UserReducer from "./userReducer";

const rootReducer = combineReducers({
    regionState: RegionReduce,
    userState: UserReducer
})

export default rootReducer