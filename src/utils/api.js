const baseUrl = 'http://localhost:8080'

export const fetchSources = () => {
  return fetch(`${baseUrl}/sources`)
    .then(res => res.json())
}

export const fetchFeeds = ({ date, key }) => {
  return fetch(`${baseUrl}/feeds?date=${date}&key=${key}`)
    .then(res => res.json())
}

export const fetchFeed = ({ uuid }) => {
  return fetch(`${baseUrl}/feeds/${uuid}`)
    .then(res => res.json())
}
