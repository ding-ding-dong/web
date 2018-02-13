const baseUrl = '/api'

export const fetchSources = () => {
  return fetch(`${baseUrl}/sources`)
    .then(res => res.json())
}

export const fetchSource = ({ source, options }) => {
  if (options.isNew) {
    return fetch(`${baseUrl}/sources`, { headers: {'Content-Type': 'application/json'}, method: 'POST', body: JSON.stringify(source) })
      .then(res => res.json())
      .then(data => data.error ? null : data)
  }
}

export const fetchFeeds = ({ date, key }) => {
  return fetch(`${baseUrl}/feeds?date=${date}&key=${key}`)
    .then(res => res.json())
}

export const fetchFeed = ({ uuid }) => {
  return fetch(`${baseUrl}/feeds/${uuid}`)
    .then(res => res.json())
}
