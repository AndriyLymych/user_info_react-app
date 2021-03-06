import React, {useEffect} from "react";
import AddPostForm from "../AddPostForm/AddPostForm";
import {reduxForm} from "redux-form";
import Preloader from "../Preloader/Preloader";
import style from './ModalWindow.module.css';

const AddPostReduxForm = reduxForm({
    form: 'add-post'
})(AddPostForm);

const ModalWindow = ({closeWindow, getUsers, users, isPostAddedLoading, addPostForUser, isPostAdded, addErr, addedPost, openModal}) => {

    useEffect(() => {
        getUsers()
    }, []);

    const onSubmit = ({title, body, userId}) => {
        addPostForUser(title, body, userId);
    };

    return <div className={!openModal ? style.modalContainer : style.modalContainer + ' ' + style.modalOpen}>
        {isPostAddedLoading && <Preloader/>}
        <button title={'Close'} className={style.closeBtn} onClick={closeWindow}>Close</button>
        {!isPostAdded &&
        <AddPostReduxForm onSubmit={onSubmit} users={users} addErr={addErr}/>}
        {isPostAdded && <div>
            <div className={style.successAdd}>Post is added successfully!</div>
            <div className={style.addedPostArticle}>Post number {addedPost.id}:</div>
            {<div className={style.addedPostInfo}>
                <div className={style.addedPostInfoItem}>Title: <i>{addedPost?.title}</i></div>
                <div className={style.addedPostInfoItem}>Description: <i>{addedPost?.body}</i></div>
            </div>}
        </div>}
    </div>
};

export default ModalWindow;