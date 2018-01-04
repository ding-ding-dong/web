import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Reboot from 'material-ui/Reboot'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import deepPurple from 'material-ui/colors/deepPurple'

import Static from './static'
import FeedList from './FeedList'
import FeedDetail from './FeedDetail'

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Reboot />
        <Switch>
          <Route exact path="/static" component={Static} />
          <Route exact path="/:date/feeds/:uuid" component={FeedDetail} />
          <Route exact path="/:date?/:key?" component={FeedList} />
        </Switch>
      </MuiThemeProvider>
    )
  }
}

export default App
