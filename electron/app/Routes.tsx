import React from "react";
import { Switch, Route } from "react-router-dom";

import routes from "./constants/routes.json";
import App from "./containers/App";
import Dataset from "./containers/Dataset";

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.DATASET} component={Dataset} />
        <Route path={routes.LIST} component={Dataset} />
        <Route path={routes.CHARTS} component={Dataset} />
      </Switch>
    </App>
  );
}