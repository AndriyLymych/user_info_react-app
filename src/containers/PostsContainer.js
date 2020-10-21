import {connect} from "react-redux";
import {addPostForUser, getPostsForUser} from "../redux/reducers/post/thunks";
import Posts from "../Components/pages/Posts/Posts";
import {withRouter} from "react-router";
import {getUserProfileById, getUsers} from "../redux/reducers/user/thunks";


const mapStateToProps = state => {
    return {
        posts: state.postReducer.posts,
        isPostsLoading: state.postReducer.isPostsLoading,
        addErr: state.postReducer.addErr,
        isPostAdded: state.postReducer.isPostAdded,
        isPostAddedLoading: state.postReducer.isPostAddedLoading,
        postsLoadingError: state.postReducer.postsLoadingError,
        userProfile: state.userReducer.userProfile,
        userProfileLoading: state.userReducer.userProfileLoading,
        users: state.userReducer.users,
        addedPost: state.postReducer.addedPost
    }
};

const PostsWithRouter = withRouter(Posts);

export default connect(mapStateToProps, {
    addPostForUser,
    getPostsForUser,
    getUserProfileById,
    getUsers
})(PostsWithRouter)