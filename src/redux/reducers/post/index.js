import {
    SET_IS_POST_ADDED,
    SET_POSTS,
    SET_POSTS_LOADING,
    SET_POSTS_LOADING_ERROR,
    SET_ADD_ERR_MSG,
    SET_ADDED_POST_RECORD,
    SET_ADDED_LOADING,
} from "./constans";

const initialState = {
    posts: [],
    isPostsLoading: false,
    postsLoadingError: null,
    isPostAddedLoading: false,
    isPostAdded: false,
    addErr: null,
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

        case SET_IS_POST_ADDED :
            return {
                ...state,
                isPostAdded: action.payload
            };

        case SET_ADDED_LOADING :
            return {
                ...state,
                isPostAddedLoading: action.payload
            };

        case SET_ADD_ERR_MSG :
            return {
                ...state,
                addErr: action.payload
            };
        case SET_ADDED_POST_RECORD :
            return {
                ...state,
                addedPost: action.payload
            };

        default:
            return state
    }
};

export default postReducer;