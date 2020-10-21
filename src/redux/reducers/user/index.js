import {SET_USERS_LOADING, SET_USERS, SET_USER_ERROR, SET_USER_PROFILE, SET_USER_PROFILE_LOADING} from "./constans";

const initialState = {
    users: [],
    isUsersLoading: false,
    userError: null,
    userProfile: null,
    userProfileLoading: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USERS :
            return {
                ...state,
                users: action.payload
            };

        case SET_USERS_LOADING :
            return {
                ...state,
                isUsersLoading: action.payload
            };
        case SET_USER_ERROR :
            return {
                ...state,
                userError: action.payload
            };
        case SET_USER_PROFILE :
            return {
                ...state,
                userProfile: action.payload
            };
        case SET_USER_PROFILE_LOADING :
            return {
                ...state,
                userProfileLoading: action.payload
            };

        default:
            return state
    }
};

export default userReducer;