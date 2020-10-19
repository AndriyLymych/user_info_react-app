import {combineReducers} from "redux";
import userReducer from "./reducers/user";
import {reducer as formReducer} from "redux-form"
import postReducer from "./reducers/post";

export const reducers = combineReducers({
    userReducer,
    postReducer,
    form: formReducer
});


