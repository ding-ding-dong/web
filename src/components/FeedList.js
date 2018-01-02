import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import moment from 'moment'

import * as actions from '../actions'
import Layout from './Layout'
import Feeds from './Feeds'

class Body extends Component {
  componentDidMount() {
    this.props
      .fetchSources()
      .then(() => {
        const { match: { params: { date, key } }, sources } = this.props
        this.props.fetchFeeds({
          date: date ? date : this.getPrevDate(),
          key: key ? key : sources[0].key,
        })
      })
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { date: prevDate, key: prevKey } } } = prevProps
    const { match: { params: { date, key } } } = this.props

    if (prevDate !== date || prevKey !== key) {
      this.props.fetchFeeds({ date, key })
    }
  }

  getPrevDate = () => {
    return moment.utc().utcOffset('+0800').add(-8, 'hours').add(-1, 'day').format('YYYY-MM-DD')
  }

  render() {
    const { feeds } = this.props

    return (
      <Feeds feeds={feeds} />
    )
  }
}

const mapStateToProps = ({ sources, feeds }) => ({
  sources,
  feeds,
})

function FeedList() {
  return (
    <Layout Body={withRouter(connect(mapStateToProps, actions)(Body))} />
  )
}

export default FeedList
