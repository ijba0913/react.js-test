import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'

import store from './store'
import history from './history'

import Person from './containers/PersonViewContainer'
import Home from './components/HomeView'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/person/:username' component={Person} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

