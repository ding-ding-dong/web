import * as api from '../utils/api'

export const RECEIVE_SOURCES = 'RECEIVE_SOURCES'

export const receiveSources = sources => ({ type: RECEIVE_SOURCES, sources })
export const fetchSources = () => async dispatch => dispatch(receiveSources(await api.fetchSources()))
