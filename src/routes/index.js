import React from 'react'
import { BrowserRouter, Router, Link, Switch } from 'react-router-dom'

import Champion from './champion'
import Champions from './champions'

export default function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Champions} />
        <Route exact path='/Champion/:id' component={Champion} />
      </Switch>
    </BrowserRouter>
  )
}
