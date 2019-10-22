import React from 'react'
import { BrowserRouter, Router, Link, Switch } from 'react-router-dom'

import Champion from './Champion'
import Champions from './Champions'

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
