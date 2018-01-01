import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './App.css'

import Static from './static'
import FeedList from './FeedList'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/static" component={Static} />
        <Route exact path="/:date?/:key?" component={FeedList} />
      </div>
    )
  }
}

export default App
