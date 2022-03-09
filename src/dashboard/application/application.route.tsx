import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import ApplicationEdit from "./application.edit/Edit.component";
import ApplicationList from "./application.list/List.application";
import ApplicationView from "./application.view/Application.view";

function ApplicationRoute() {
  return (
    <Switch>
        <Route path="/dashboard/application/list">
            <ApplicationList />
        </Route>
        <Route path="/dashboard/application/edit">
            <ApplicationEdit />
        </Route>
        <Route path="/dashboard/application/view">
            <ApplicationView />
        </Route>
        
        <Redirect from="*" to="/dashboard/application/list"/>
    </Switch>
  );
}

export default ApplicationRoute;