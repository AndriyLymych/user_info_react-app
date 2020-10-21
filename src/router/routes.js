import React from "react";
import {Route, Switch} from "react-router-dom";
import UserContainer from "../containers/UserContainer";
import PostsContainer from "../containers/PostsContainer";
import PostContainer from "../containers/PostContainer";
import Page404 from "../Components/pages/Page404/Page404";

const routes = () => {

    return (
        <Switch>
            <Route path='/' exact render={() => <UserContainer/>}/>
            <Route path='/posts/:userId' render={() => <PostsContainer/>}/>
            <Route path='/post/:id' render={() => <PostContainer/>}/>
            <Route path='*' render={() => <Page404/>}/>
        </Switch>
    )
};

export default routes;