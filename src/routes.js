import React from "react"

import { BrowserRouter, Route, Switch } from "react-router-dom"
import Champions from "./containers/Champions"
import Champion from "./containers/Champion"

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Champions} />
      <Route exact path="/champion/:id" component={Champion} />
    </Switch>
  </BrowserRouter>
)

export default Routes
