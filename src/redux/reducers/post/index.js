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

const initialState = {
    posts: [],
    isPostsLoading: false,
    postsLoadingError: null,
    isPostAddedLoading: false,
    isPostEditedLoading: false,
    isPostDeletedLoading: false,
    postRecord: null,
    isPostRecordLoading: false,
    commentsForPost: [],
    isCommentsLoading: false
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_POSTS :
            return {
                ...state,
                posts: action.payload
            };

        case SET_POSTS_LOADING :
            return {
                ...state,
                isPostsLoading: action.payload
            };
        case SET_POSTS_LOADING_ERROR :
            return {
                ...state,
                postsLoadingError: action.payload
            };
        case SET_IS_POST_EDITED :
            return {
                ...state,
                isPostEditedLoading: action.payload
            };
        case SET_IS_POST_ADDED :
            return {
                ...state,
                isPostAddedLoading: action.payload
            };
        case SET_IS_POST_DELETED :
            return {
                ...state,
                isPostDeletedLoading: action.payload
            };
        case SET_POST_RECORD :
            return {
                ...state,
                postRecord: action.payload
            };
        case SET_POST_RECORD_LOADING :
            return {
                ...state,
                isPostRecordLoading: action.payload
            };
        case SET_COMMENTS_FOR_POSTS_LOADING :
            return {
                ...state,
                isCommentsLoading: action.payload
            };
        case SET_COMMENTS_FOR_POSTS :
            return {
                ...state,
                commentsForPost: action.payload
            };

        default:
            return state

    }
};

export default postReducer;