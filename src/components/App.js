import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'

import Static from './static'
import FeedList from './FeedList'
import FeedDetail from './FeedDetail'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/static" component={Static} />
          <Route exact path="/feeds/:uuid" component={FeedDetail} />
          <Route exact path="/:date?/:key?" component={FeedList} />
        </Switch>
      </div>
    )
  }
}

export default App
