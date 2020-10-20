import React from "react";
import {NavLink} from "react-router-dom";

const UserCard = ({user:{id,name,username}}) => {

    return(
        <div>
            {name} {username}
            <NavLink to={`/posts/${id}`}>Details</NavLink>
        </div>
    )
};

export default UserCard;
