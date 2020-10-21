import {connect} from "react-redux";
import {getPostRecord, getPostComments, deletePostByUser, editPostByUser,} from "../redux/reducers/postProfile/thunks";
import Post from "../Components/pages/Post/Post";
import {withRouter} from "react-router";

const mapStateToProps = state => {
    return {
        postRecord: state.postProfileReducer.postRecord,
        isPostRecordLoading: state.postProfileReducer.isPostRecordLoading,
        commentsForPost: state.postProfileReducer.commentsForPost,
        isCommentsLoading: state.postProfileReducer.isCommentsLoading,
        isPostDeleted: state.postProfileReducer.isPostDeleted,
        isPostDeletedLoading: state.postProfileReducer.isPostDeletedLoading,
        isPostEdited: state.postProfileReducer.isPostEdited,
        isPostEditedLoading: state.postProfileReducer.isPostEditedLoading,
        editedPost: state.postProfileReducer.editedPost,
        editErr: state.postProfileReducer.editErr,
        deleteErr: state.postProfileReducer.deleteErr
    }
};

const PostWithRouter = withRouter(Post);

export default connect(mapStateToProps, {
    getPostRecord,
    getPostComments,
    deletePostByUser,
    editPostByUser
})(PostWithRouter)