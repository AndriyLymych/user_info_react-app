import {
    SET_COMMENTS_FOR_POSTS,
    SET_COMMENTS_FOR_POSTS_LOADING,
    SET_IS_POST_DELETED,
    SET_IS_POST_EDITED,
    SET_POST_RECORD_LOADING,
    SET_POST_RECORD,
    SET_DELETED_LOADING,
    SET_EDITED_LOADING,
    SET_EDITED_NEW_POST,
    SET_DELETE_ERR,
    SET_EDIT_ERR
} from "./constans";

export const setCommentsForPost = payload => ({type: SET_COMMENTS_FOR_POSTS, payload});
export const setCommentsForPostLoading = payload => ({type: SET_COMMENTS_FOR_POSTS_LOADING, payload});
export const setIsPostDeleted = payload => ({type: SET_IS_POST_DELETED, payload});
export const setIsPostEdited = payload => ({type: SET_IS_POST_EDITED, payload});
export const setPostRecordLoading = payload => ({type: SET_POST_RECORD_LOADING, payload});
export const setPostRecord = payload => ({type: SET_POST_RECORD, payload});
export const setEditPostLoading = payload => ({type: SET_EDITED_LOADING, payload});
export const setDeletePostLoading = payload => ({type: SET_DELETED_LOADING, payload});
export const setEditedPost = payload => ({type: SET_EDITED_NEW_POST, payload});
export const setDeleteErr = payload => ({type: SET_DELETE_ERR, payload});
export const setEditErr = payload => ({type: SET_EDIT_ERR, payload});
