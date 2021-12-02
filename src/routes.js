import React from 'react'
import {Route, IndexRoute} from '@s-ui/react-router'
import loadPage from '@s-ui/react-initial-props/lib/loadPage'
import contextFactory from './contextFactory'

const loadHomePage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Home" */ './pages/Home')
)
const LoadMovieDetails = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "MovieDetails" */ './pages/MovieDetails')
)
const SearchResults = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "SearchResults" */ './pages/SearchResults')
)
export default (
  <Route component={require('./components/App').default}>
    <Route path="/">
      <IndexRoute getComponent={loadHomePage} />
    </Route>
    <Route path="/search/:keyword" getComponent={SearchResults} />
    <Route path="/details/:id" getComponent={LoadMovieDetails} />
  </Route>
)
