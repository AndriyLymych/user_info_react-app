import React, {useEffect, useState} from "react";
import Preloader from "../../basic/Preloader/Preloader";
import ModalWindow from "../../basic/ModalWindow/ModalWindow";
import Footer from "../../basic/Footer/Footer";
import {NavLink} from "react-router-dom";
import usersStyles from '../Users/Users.module.css'
import style from './Posts.module.css'

const Posts = ({
                   match,
                   posts,
                   isPostsLoading,
                   isPostAddedLoading,
                   postsLoadingError,
                   getPostsForUser,
                   userProfile,
                   userProfileLoading,
                   getUserProfileById,
                   getUsers,
                   users,
                   addPostForUser,
                   addErr,
                   isPostAdded,
                   addedPost
               }) => {

    const userId = match.params.userId;

    useEffect(() => {
        getUserProfileById(userId);
        getPostsForUser(userId);

    }, []);

    const [openModal, setOpenModal] = useState(false);

    const openModalWindow = () => {
        setOpenModal(true);
    };
    const closeModalWindow = () => {
        setOpenModal(false);
        window.location.reload()
    };

    return (
        <div className={style.postsContainer}>
            <div>
                {openModal &&
                <ModalWindow closeWindow={closeModalWindow}
                             isPostAddedLoading={isPostAddedLoading} users={users}
                             getUsers={getUsers} addPostForUser={addPostForUser} isPostAdded={isPostAdded}
                             addErr={addErr} addedPost={addedPost}/>}

                {(isPostsLoading || userProfileLoading) && <Preloader/>}
                {!userProfileLoading && <h2 className={usersStyles.usersTitle}>Author: {userProfile?.name}</h2>}
                {
                    !postsLoadingError && !isPostsLoading && <div>
                        <table border="2">
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>More info</th>
                            </tr>
                            </thead>

                            {
                                posts.map(p =>

                                    <tbody key={p.id}>
                                    <tr key={p.id}>
                                        <td>{p.title}</td>
                                        <td>{p.body}</td>
                                        <td><NavLink className={usersStyles.usersLink}
                                                     to={`/post/${p.id}`}>Details</NavLink></td>
                                    </tr>
                                    </tbody>
                                )
                            }

                        </table>
                        <button className={style.openModal} onClick={openModalWindow}>Add post</button>
                    </div>
                }

                {postsLoadingError && <div className={usersStyles.serverErr}>{postsLoadingError}</div>}

            </div>
            <Footer/>
        </div>
    )
};

export default Posts;