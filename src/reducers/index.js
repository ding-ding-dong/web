/*
const state = {
  sources: [{
    key,
    name,
    url,
  }],
}
*/

import { combineReducers } from 'redux'

import { RECEIVE_SOURCES } from '../actions'

const sources = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SOURCES:
      return action.sources || state
    default:
      return state
  }
}

export default combineReducers({
  sources,
})
