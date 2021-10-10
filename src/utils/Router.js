import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import PageNotFound from "../containers/PageNotFound";

const WrappedRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="*" component={PageNotFound} />
        </Switch>
    );
};

export default WrappedRouter;
