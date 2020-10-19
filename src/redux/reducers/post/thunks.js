import {postAPI} from "../../../api/postAPI";
import {
    setCommentsForPost,
    setCommentsForPostLoading,
    setIsPostAdded,
    setIsPostDeleted,
    setIsPostEdited,
    setPostRecord,
    setPostRecordLoading,
    setPosts,
    setPostsLoading,
    setPostsLoadingError,
} from "./actions";
import {ErrorMsg} from "../../../constant/errorMsg";

export const getPostsForUser = userId => async dispatch => {

    try {
        dispatch(setPostsLoading(true));

        const {data: posts} = await postAPI.getPostsByUserId(userId);

        dispatch(setPosts(posts));
        dispatch(setPostsLoading(false));

    } catch (e) {
        dispatch(setPostsLoading(false));
        dispatch(setPostsLoadingError(ErrorMsg.SERVER_ERR))

    }
};
export const addPostForUser = (title, body, userId) => async dispatch => {
    try {
        const isAdded = await postAPI.addPostByUser(title, body, userId);

        Promise.all([isAdded]).then(() => {
            dispatch(setIsPostAdded(true));
        });

    } catch (e) {
        dispatch(setIsPostAdded(false));

    }
};
export const editPostForUser = (postId, title, body) => async dispatch => {
    try {
        const isEdited = await postAPI.editPost(postId, title, body);

        Promise.all([isEdited]).then(() => {
            dispatch(setIsPostEdited(true));
        });

    } catch (e) {
        dispatch(setIsPostEdited(true));

    }
};
export const deletePostForUser = postID => async dispatch => {
    try {
        const isDeleted = await postAPI.deletePost(postID);

        Promise.all([isDeleted]).then(() => {
            dispatch(setIsPostDeleted(true));
        });

    } catch (e) {
        dispatch(setIsPostDeleted(true));

    }
};
export const getPostRecord = postID => async dispatch => {
    try {
        dispatch(setPostRecordLoading(true));

        const {data: postRecord} = await postAPI.getPostById(postID);

        dispatch(setPostRecord(postRecord));
        dispatch(setPostRecordLoading(false));

    } catch (e) {
        dispatch(setPostRecordLoading(false));

    }
};
export const getPostComments = postID => async dispatch => {
    try {
        dispatch(setCommentsForPostLoading(true));

        const {data: comments} = await postAPI.getCommentsForPost(postID);

        dispatch(setCommentsForPost(comments));
        dispatch(setCommentsForPostLoading(false));

    } catch (e) {
        dispatch(setCommentsForPostLoading(false));

    }
};
