import React, {useEffect} from "react";
import Preloader from "../../basic/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import style from './Users.module.css'
import Footer from "../../basic/Footer/Footer";

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
                            {
                                users.map(u =>

                                    <tr key={u.id}>
                                        <td>{u.username}</td>
                                        <td>{u.name}</td>
                                        <td>{u.email}</td>
                                        <td>{u.address.city}</td>
                                        <td>{u.phone}</td>
                                        <td>{u.website}</td>
                                        <td>{u.company.name}</td>
                                        <td><NavLink className={style.usersLink} to={`/posts/${u.id}`}>See posts</NavLink></td>
                                    </tr>)
                            }


                        </table>
                    </div>
                }
                {userError && <div>{userError}</div>}
            </div>
            <Footer/>

        </div>
    )
};

export default Users;