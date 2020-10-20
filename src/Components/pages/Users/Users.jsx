import React, {useEffect} from "react";
import Preloader from "../../basic/Preloader/Preloader";
import UserCard from "../../basic/UserCard/UserCard";

const Users = ({users, getUsers,userError,isUsersLoading}) => {

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <div>
            {isUsersLoading && <Preloader/>}
            <h1>Список користувачів:</h1>
            {!userError && users.map(user => <UserCard key={user.id} user={user}/>)}
            {userError && <div>{userError}</div>}
        </div>
    )
};

export default Users;