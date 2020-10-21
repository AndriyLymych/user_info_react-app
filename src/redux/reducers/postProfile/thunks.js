import {postAPI} from "../../../api/postAPI";
import {
    setCommentsForPost,
    setCommentsForPostLoading,
    setDeleteErr,
    setDeletePostLoading,
    setEditedPost,
    setEditErr,
    setEditPostLoading,
    setIsPostDeleted,
    setIsPostEdited,
    setPostRecord,
    setPostRecordLoading,
} from "./actions";
import {ErrorMsg} from "../../../constant/errorMsg";

export const editPostByUser = (postId, title, body) => async dispatch => {
    try {
        dispatch(setEditPostLoading(true));

        const isEdited = await postAPI.editPost(postId, title, body);

        Promise.all([isEdited]).then(() => {
            dispatch(setEditedPost(isEdited.data));
            dispatch(setIsPostEdited(true));
        });
        dispatch(setEditPostLoading(false));

    } catch (e) {
        dispatch(setEditErr(ErrorMsg.SERVER_ERR));
        dispatch(setEditPostLoading(false));
        dispatch(setIsPostEdited(true));

    }
};
export const deletePostByUser = postId => async dispatch => {
    try {
        dispatch(setDeletePostLoading(true));

        const isDeleted = await postAPI.deletePost(postId);

        Promise.all([isDeleted]).then(() => {
            dispatch(setIsPostDeleted(true));
        });

        dispatch(setDeletePostLoading(false));


    } catch (e) {
        dispatch(setDeleteErr(ErrorMsg.SERVER_ERR));
        dispatch(setIsPostDeleted(true));
        dispatch(setDeletePostLoading(false));

    }
};
export const getPostRecord = postId => async dispatch => {
    try {
        dispatch(setPostRecordLoading(true));

        const {data: postRecord} = await postAPI.getPostById(postId);

        dispatch(setPostRecord(postRecord));
        dispatch(setPostRecordLoading(false));

    } catch (e) {
        dispatch(setPostRecordLoading(false));

    }
};
export const getPostComments = postId => async dispatch => {
    try {
        dispatch(setCommentsForPostLoading(true));

        const {data: comments} = await postAPI.getCommentsForPost(postId);

        dispatch(setCommentsForPost(comments));
        dispatch(setCommentsForPostLoading(false));

    } catch (e) {
        dispatch(setCommentsForPostLoading(false));

    }
};
