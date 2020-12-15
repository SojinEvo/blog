import React, { Component } from 'react'
import { Route, HashRouter, Switch, } from 'react-router-dom'
import Home from './views/home'
import Blog from './views/blog'
import Admin from './views/admin'
import Edit from './views/editor'
import Add from './views/add'

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/admin' component={Admin} />
          <Route path='/edit' component={Edit} />
          <Route path='/add' component={Add} />
        </Switch>
      </HashRouter>
    )
  }
}