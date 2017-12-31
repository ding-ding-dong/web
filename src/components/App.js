import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './App.css'

import Static from './static'
import FeedList from './FeedList'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/static" component={Static} exact />
        <Route path="/" component={FeedList} exact />
      </div>
    )
  }
}

export default App
