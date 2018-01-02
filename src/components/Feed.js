import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

class Feed extends Component {
  render() {
    const { feed } = this.props

    return (
      <Paper>
        <Typography type="headline" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
    )
  }
}

export default Feed
