import React, { Component } from 'react'

import { CircularProgress } from 'material-ui/Progress'
import Typography from 'material-ui/Typography'

import { ProcessingContainer } from './styled'

class Processing extends Component {
  render() {
    return (
      <ProcessingContainer>
        <CircularProgress size={16} />
        <Typography type="caption">正在刷新列表...</Typography>
      </ProcessingContainer>
    )
  }
}

export default Processing
