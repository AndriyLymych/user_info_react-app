import React, {useEffect, useState} from "react";
import Preloader from "../../basic/Preloader/Preloader";
import CommentCard from "../../basic/CommentCard/CommentCard";
import {reduxForm} from "redux-form";
import UpdatePostForm from "../../basic/UpdatePostForm/UpdatePostForm";
import Footer from "../../basic/Footer/Footer";
import style from './Post.module.css'
import usersStyle from '../../pages/Users/Users.module.css'

const UpdatePostReduxForm = reduxForm({
    form: 'edit-post'
})(UpdatePostForm);

const Post = ({
                  match,
                  postRecord,
                  isPostRecordLoading,
                  commentsForPost,
                  isCommentsLoading,
                  getPostRecord,
                  getPostComments,
                  isPostDeleted,
                  isPostDeletedLoading,
                  deletePostByUser,
                  editPostByUser,
                  isPostEditedLoading,
                  editedPost,
                  editErr,
                  deleteErr,
                  isPostEdited
              }) => {

    const postId = match.params.id;

    useEffect(() => {
        getPostRecord(postId);
        getPostComments(postId)
    }, []);

    const [editPost, setEditPost] = useState(false);

    const deletePost = () => {
        deletePostByUser(postId);

    };
    const openEditForm = () => {
        setEditPost(true)
    };
    const closeEditForm = () => {
        setEditPost(false)
    };
    const onSubmit = ({title, body}) => {
        editPostByUser(postId, title, body);
        setEditPost(false)
    };

    if (isPostRecordLoading || isCommentsLoading) {
        return <Preloader/>
    }

    return (
        <div className={style.postProfileContainer}>
            <div>
                {(isPostDeletedLoading || isPostEditedLoading) && <Preloader/>}
                {
                    !isPostDeleted &&
                    <div>
                        {
                            !editPost &&
                            <>
                                {
                                    !isPostEdited && postRecord &&
                                    <div>
                                        <div className={style.postInfoArticle}>Post information:</div>
                                        <div className={style.postInfoItem}><span className={style.infoItemArticle}>Post number:</span>
                                            <i> {postRecord?.id}</i></div>
                                        <div className={style.postInfoItem}><span className={style.infoItemArticle}>Post title:</span>
                                            <i> {postRecord?.title}</i>
                                        </div>
                                        <p className={style.postInfoItem}>
                                            <span className={style.infoItemArticle}>Post description:</span>
                                            <i> {postRecord?.body}</i></p>
                                        <div className={style.changePostInfo}>
                                            <button title={'Edit'} className={style.editBtn} onClick={openEditForm}>Edit</button>
                                            <button title={'Delete'} className={style.deleteBtn} onClick={deletePost}>Delete</button>
                                        </div>
                                    </div>
                                }
                                {
                                    !postRecord &&
                                    <div className={usersStyle.serverErr}>Something wrong.Please try again
                                        later...</div>
                                }
                                {
                                    isPostEdited && !editErr &&
                                    <div>
                                        <div className={style.postInfoArticle}>Post information:</div>
                                        <div className={style.postInfoItem}>
                                            <span
                                                className={style.infoItemArticle}>New title:</span><i> {editedPost?.title}</i>
                                        </div>
                                        <div className={style.postInfoItem}> <span
                                            className={style.infoItemArticle}>New description:</span><i> {editedPost?.body}</i>
                                        </div>
                                        <div className={style.successEdit}>Post is edited successfully!</div>
                                    </div>
                                }
                                {
                                    isPostEdited && editErr &&
                                    <div className={usersStyle.serverErr}>
                                        {editErr}
                                    </div>
                                }
                            </>
                        }
                        {editPost &&
                        <div className={style.editFormInfoContainer}>
                            <div className={style.postInfoArticle}>Please, edit post:</div>
                            <UpdatePostReduxForm onSubmit={onSubmit} initialValues={postRecord}/>
                            <button title={'Cancel'} className={style.deleteBtn} onClick={closeEditForm}>Cancel</button>
                        </div>
                        }
                        <div title={'Comments'} className={style.commentArticle}>Comments:</div>
                        {
                            !commentsForPost.length ?
                                <div className={usersStyle.serverErr + ' ' + style.noCommentsErr}>No comments</div> :
                                commentsForPost.map(comment => <CommentCard key={comment.id} comment={comment}/>)
                        }
                    </div>
                }
                {
                    isPostDeleted && !deleteErr && <div className={style.postStatus}>Post is deleted successfully</div>
                }
                {
                    isPostDeleted && deleteErr && <div className={style.postProfileErr}>{deleteErr}</div>
                }
            </div>
            <Footer/>
        </div>
    )
};

export default Post;
