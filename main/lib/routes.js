import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Home from '../components/home/Home.react'

const routes = (
  <Router history={hashHistory}>
    <Route path='/'component={Home} />
  </Router>
)

export default routes
