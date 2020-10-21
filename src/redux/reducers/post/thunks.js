import {postAPI} from "../../../api/postAPI";
import {
    setAddedPostRecord,
    setAddErr,
    setAddPostLoading,
    setIsPostAdded,
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
        dispatch(setAddPostLoading(true));

        const addedPost = await postAPI.addPostByUser(title, body, userId);

        Promise.all([addedPost]).then(() => {
            dispatch(setAddedPostRecord(addedPost.data));
            dispatch(setIsPostAdded(true));
        });

        dispatch(setAddPostLoading(false));

    } catch (e) {
        dispatch(setAddErr(ErrorMsg.SERVER_ERR));
        dispatch(setAddPostLoading(false));

    }
};
