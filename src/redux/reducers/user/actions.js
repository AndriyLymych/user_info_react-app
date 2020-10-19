import {SET_USERS, SET_USERS_LOADING, SET_USER_ERROR, SET_USER_PROFILE, SET_USER_PROFILE_LOADING} from "./constans";

export const setUsers = payload => ({type: SET_USERS, payload});
export const setUserLoading = payload => ({type: SET_USERS_LOADING, payload});
export const setUserError = payload => ({type: SET_USER_ERROR, payload});
export const setUserProfile = payload => ({type: SET_USER_PROFILE, payload});
export const setUserProfileLoading = payload => ({type: SET_USER_PROFILE_LOADING, payload});