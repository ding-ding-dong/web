import * as api from '../utils/api'

export const RECEIVE_SOURCES = 'RECEIVE_SOURCES'
export const RECEIVE_FEEDS = 'RECEIVE_FEEDS'
export const RECEIVE_FEED = 'RECEIVE_FEED'

export const receiveSources = sources => ({ type: RECEIVE_SOURCES, sources })
export const fetchSources = () => async dispatch => dispatch(receiveSources(await api.fetchSources()))

export const receiveFeeds = feeds => ({ type: RECEIVE_FEEDS, feeds })
export const fetchFeeds = ({ date, key }) => async dispatch => dispatch(receiveFeeds(await api.fetchFeeds({ date, key })))

export const receiveFeed = feed => ({ type: RECEIVE_FEED, feed })
export const fetchFeed = ({ uuid }) => async dispatch => dispatch(receiveFeed(await api.fetchFeed({ uuid })))
