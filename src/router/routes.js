import React from "react";
import {Route, Switch} from "react-router-dom";
import Post from "../Components/pages/Post/Post";
import Page404 from "../Components/pages/Page404/Page404";
import UserContainer from "../containers/UserContainer";
import PostsContainer from "../containers/PostsContainer";

const routes = () => {

    return (
        <Switch>
            <Route path='/' exact render={() => <UserContainer/>}/>
            <Route path='/posts/:userId' render={() => <PostsContainer/>}/>
            <Route path='/post' render={() => <Post/>}/>
            <Route path='*' render={() => <Page404/>}/>
        </Switch>
    )
};

export default routes;