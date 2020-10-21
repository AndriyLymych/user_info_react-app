import {
    SET_IS_POST_ADDED,
    SET_POSTS,
    SET_POSTS_LOADING,
    SET_POSTS_LOADING_ERROR,
    SET_ADDED_LOADING,
    SET_ADD_ERR_MSG,
    SET_ADDED_POST_RECORD
} from "./constans";

export const setIsPostAdded = payload => ({type: SET_IS_POST_ADDED, payload});
export const setPosts = payload => ({type: SET_POSTS, payload});
export const setPostsLoading = payload => ({type: SET_POSTS_LOADING, payload});
export const setPostsLoadingError = payload => ({type: SET_POSTS_LOADING_ERROR, payload});
export const setAddPostLoading = payload => ({type: SET_ADDED_LOADING, payload});
export const setAddErr = payload => ({type: SET_ADD_ERR_MSG, payload});
export const setAddedPostRecord = payload => ({type: SET_ADDED_POST_RECORD, payload});
