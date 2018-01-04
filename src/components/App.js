import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Reboot from 'material-ui/Reboot'

import Static from './static'
import FeedList from './FeedList'
import FeedDetail from './FeedDetail'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Reboot />
        <Switch>
          <Route exact path="/static" component={Static} />
          <Route exact path="/:date/feeds/:uuid" component={FeedDetail} />
          <Route exact path="/:date?/:key?" component={FeedList} />
        </Switch>
      </div>
    )
  }
}

export default App
