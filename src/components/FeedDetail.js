import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import * as actions from '../actions'
import Layout from './Layout'
import Feed from './Feed'

class Body extends Component {
  componentDidMount() {
    const { match: { params: { uuid } } } = this.props
    this.props.fetchFeed({ uuid })
  }

  render() {
    const { feed } = this.props

    return (
      <Feed feed={feed} />
    )
  }
}

const mapStateToProps = ({ feed }) => ({
  feed,
})

function FeedDetail() {
  return (
    <Layout Body={withRouter(connect(mapStateToProps, actions)(Body))} />
  )
}

export default FeedDetail
