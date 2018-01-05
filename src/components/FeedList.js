import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import moment from 'moment'

import * as actions from '../actions'
import { Container } from './styled'
import Layout from './Layout'
import Feeds from './Feeds'
import Processing from './Processing'

class Body extends Component {
  state = {
    isProcessing: true,
  }

  componentDidMount() {
    this.props
      .fetchSources()
      .then(() => {
        const { match: { params: { date, key } }, sources } = this.props

        this.props
          .fetchFeeds({
            date: date ? this.getDateValue(date) : this.getDateValue(moment().format('YYYY-MM-DD')),
            key: key ? key : sources[0].key,
          })
          .then(() => {
            this.setState({ 'isProcessing': false })
          })
      })
  }

  getDateValue = date => {
    return moment(date).valueOf()
  }

  render() {
    const { feeds } = this.props
    const { isProcessing } = this.state

    return (
      <Container>
        {isProcessing ? (
          <Processing />
        ) : (
          <Feeds feeds={feeds} />
        )}
      </Container>
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
