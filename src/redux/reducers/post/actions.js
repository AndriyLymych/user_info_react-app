import {
    SET_COMMENTS_FOR_POSTS,
    SET_COMMENTS_FOR_POSTS_LOADING,
    SET_IS_POST_ADDED,
    SET_IS_POST_DELETED,
    SET_IS_POST_EDITED,
    SET_POST_RECORD_LOADING,
    SET_POST_RECORD,
    SET_POSTS,
    SET_POSTS_LOADING,
    SET_POSTS_LOADING_ERROR
} from "./constans";

export const setCommentsForPost = payload => ({type: SET_COMMENTS_FOR_POSTS, payload});
export const setCommentsForPostLoading = payload => ({type: SET_COMMENTS_FOR_POSTS_LOADING, payload});
export const setIsPostAdded = payload => ({type: SET_IS_POST_ADDED, payload});
export const setIsPostDeleted = payload => ({type: SET_IS_POST_DELETED, payload});
export const setIsPostEdited = payload => ({type: SET_IS_POST_EDITED, payload});
export const setPostRecordLoading = payload => ({type: SET_POST_RECORD_LOADING, payload});
export const setPostRecord = payload => ({type: SET_POST_RECORD, payload});
export const setPosts = payload => ({type: SET_POSTS, payload});
export const setPostsLoading = payload => ({type: SET_POSTS_LOADING, payload});
export const setPostsLoadingError = payload => ({type: SET_POSTS_LOADING_ERROR, payload});
