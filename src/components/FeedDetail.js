import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import * as actions from '../actions'
import Layout from './Layout'
import Feed from './Feed'

class Body extends Component {
  render() {
    return (
      <Feed />
    )
  }
}

function FeedDetail() {
  return (
    <Layout Body={withRouter(connect(null, actions)(Body))} />
  )
}

export default FeedDetail
