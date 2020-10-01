import { combineReducers } from "redux";
import userReducer from "./user";

const rootReducer = combineReducers({
auth: userReducer
});

export default rootReducer;