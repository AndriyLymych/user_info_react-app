import React, {useEffect} from "react";
import Preloader from "../../basic/Preloader/Preloader";

const Posts = ({
                   match,
                   posts,
                   isPostsLoading,
                   isPostAddedLoading,
                   postsLoadingError,
                   getPostsForUser,
                   userProfile,
                   userProfileLoading,
                   getUserProfileById
               }) => {

    const userId = match.params.userId;

    useEffect(() => {
        getPostsForUser(userId)

    }, []);


    return (
        <div>
            {(isPostsLoading || userProfileLoading) && <Preloader/>}
            {
                !postsLoadingError &&
                <div>
                    {posts.map(post => <div>{post.userId + ' ' + post.title}</div>)}
                </div>
            }
            {postsLoadingError && <div>{postsLoadingError}</div>}
        </div>
    )
};

export default Posts;