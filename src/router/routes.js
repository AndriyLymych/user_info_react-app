import React from "react";
import {Route, Switch} from "react-router-dom";
import UserContainer from "../containers/UserContainer";
import PostsContainer from "../containers/PostsContainer";
import PostContainer from "../containers/PostContainer";
import UnknownPage from "../Components/pages/UnknownPage/UnknownPage";

const routes = () => {

    return (
        <Switch>
            <Route path='/' exact render={() => <UserContainer/>} />
            <Route path='/posts/:userId' exact render={() => <PostsContainer/>} />
            <Route path='/post/:id' exact render={() => <PostContainer/>}/>
            <Route path='*' render={() => <UnknownPage/>} />
        </Switch>
    )
};

export default routes;