/*
const state = {
  sources: [{
    key,
    name,
    url,
  }],
  feeds: [{
    uuid,
    source,
    feed,
  }],
  feed: {},
}
*/

import { combineReducers } from 'redux'

import { RECEIVE_SOURCES, RECEIVE_SOURCE, RECEIVE_FEEDS, RECEIVE_FEED } from '../actions'

const sources = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SOURCES:
      return action.sources || state
    case RECEIVE_SOURCE:
      return state.find(source => source.key === action.source.key) ? 
        state.map(source => source.key === action.source.key ? action.source : source) :
        state.concat(action.source)
    default:
      return state
  }
}

const feeds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_FEEDS:
      return action.feeds || state
    default:
      return state
  }
}

const feed = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_FEED:
      return action.feed || state
    default:
      return state
  }
}

export default combineReducers({
  sources,
  feeds,
  feed,
})
