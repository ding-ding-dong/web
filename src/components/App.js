import React, { Component } from 'react'

import Drawer from './Drawer'
import Feeds from './Feeds'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Drawer />
        <Feeds />
      </div>
    )
  }
}

export default App
