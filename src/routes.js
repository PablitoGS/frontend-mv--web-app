import React from 'react'
import {Route, IndexRoute} from '@s-ui/react-router'

import loadPage from '@s-ui/react-initial-props/lib/loadPage'
import contextFactory from './contextFactory'

const loadHomePage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Home" */ './pages/Home')
)

console.log(require('./components/App'))
export default (
  <Route component={require('./components/App').default}>
    <Route path="/">
      <IndexRoute getComponent={loadHomePage} />
    </Route>
  </Route>
)
