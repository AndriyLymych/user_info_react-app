import React, {useEffect} from "react";
import Preloader from "../../basic/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import Footer from "../../basic/Footer/Footer";
import style from './Users.module.css'

const Users = ({users, getUsers, userError, isUsersLoading}) => {

    useEffect(() => {
        getUsers()
    }, []);


    return (
        <div className={style.usersContainer}>
            {isUsersLoading && <Preloader/>}
            <div className={style.usersInfo}>
                <h1 className={style.usersTitle}>Users List:</h1>
                {
                    !userError && !isUsersLoading &&
                    <div>
                        <table border="2">
                            <thead>
                            <tr>
                                <th>UserName</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>City</th>
                                <th>Phone</th>
                                <th>Website</th>
                                <th>Company</th>
                                <th>User Posts</th>
                            </tr>
                            </thead>
                            {
                                users.map(u =>

                                    <tbody key={u.id}>
                                    <tr>
                                        <td>{u.username}</td>
                                        <td>{u.name}</td>
                                        <td>{u.email}</td>
                                        <td>{u.address.city}</td>
                                        <td>{u.phone}</td>
                                        <td>{u.website}</td>
                                        <td>{u.company.name}</td>
                                        <td><NavLink className={style.usersLink} to={`/posts/${u.id}`}>See
                                            posts</NavLink></td>
                                    </tr>
                                    </tbody>)
                            }


                        </table>
                    </div>
                }
                {userError && <div className={style.serverErr}>{userError}</div>}
            </div>
            <Footer/>

        </div>
    )
};

export default Users;