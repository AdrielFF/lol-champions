import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Champions from './containers/champions'
import Champion from './containers/champion'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Champions} />
      <Route exact path='/champion/:id' component={Champion} />
    </Switch>
  </BrowserRouter>
)

export default Routes
