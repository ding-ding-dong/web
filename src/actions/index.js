import * as api from '../utils/api'

export const RECEIVE_SOURCES = 'RECEIVE_SOURCES'
export const RECEIVE_FEEDS = 'RECEIVE_FEEDS'

export const receiveSources = sources => ({ type: RECEIVE_SOURCES, sources })
export const fetchSources = () => async dispatch => dispatch(receiveSources(await api.fetchSources()))

export const receiveFeeds = feeds => ({ type: RECEIVE_FEEDS, feeds })
export const fetchFeeds = ({ date, key }) => async dispatch => dispatch(receiveFeeds(await api.fetchFeeds({ date, key })))
