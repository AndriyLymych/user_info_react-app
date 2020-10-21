import React from "react";
import style from './CommentCard.module.css';

const CommentCard = ({comment: {email, name, body}}) => {

    return (
        <div className={style.commentContainer}>
            <div className={style.commentLine}/>
            <div className={style.commentItem}> <b>Author</b>: <i> {email}</i></div>
            <div className={style.commentItem}> <b>Topic</b>: <i> {name}</i></div>
            <p className={style.commentItem}> <b>Comment</b>: <i> {body}</i></p>
        </div>
    )
};

export default CommentCard;
