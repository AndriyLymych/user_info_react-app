import {connect} from "react-redux";
import {addPostForUser, getPostsForUser} from "../redux/reducers/post/thunks";
import Posts from "../Components/pages/Posts/Posts";
import {withRouter} from "react-router";


const mapStateToProps = state => {
    return {
        posts: state.postReducer.posts,
        isPostsLoading: state.postReducer.isPostsLoading,
        isPostAddedLoading: state.postReducer.isPostAddedLoading,
        postsLoadingError: state.postReducer.postsLoadingError,
        userProfile: state.userReducer.userProfile,
        userProfileLoading: state.userReducer.userProfileLoading
    }
};

const PostsWithRouter = withRouter(Posts);

export default connect(mapStateToProps, {addPostForUser, getPostsForUser})(PostsWithRouter)