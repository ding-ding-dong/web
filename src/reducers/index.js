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
}
*/

import { combineReducers } from 'redux'

import { RECEIVE_SOURCES, RECEIVE_FEEDS } from '../actions'

const sources = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SOURCES:
      return action.sources || state
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

export default combineReducers({
  sources,
  feeds,
})
