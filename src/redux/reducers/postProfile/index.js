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
    SET_EDIT_ERR,
    SET_DELETE_ERR
} from "./constans";

const initialState = {
    isPostEditedLoading: false,
    isPostEdited: false,
    isPostDeleted: false,
    isPostDeletedLoading: false,
    postRecord: null,
    isPostRecordLoading: false,
    commentsForPost: [],
    isCommentsLoading: false,
    addedPost: null,
    editedPost: null,
    editErr: null,
    deleteErr: null
};

const postProfileReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_IS_POST_EDITED :
            return {
                ...state,
                isPostEdited: action.payload
            };

        case SET_IS_POST_DELETED :
            return {
                ...state,
                isPostDeleted: action.payload
            };
        case SET_EDITED_LOADING :
            return {
                ...state,
                isPostEditedLoading: action.payload
            };
        case SET_DELETED_LOADING :
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

        case SET_EDITED_NEW_POST :
            return {
                ...state,
                editedPost: action.payload
            };
        case SET_EDIT_ERR :
            return {
                ...state,
                editErr: action.payload
            };
        case SET_DELETE_ERR :
            return {
                ...state,
                deleteErr: action.payload
            };

        default:
            return state
    }
};

export default postProfileReducer;