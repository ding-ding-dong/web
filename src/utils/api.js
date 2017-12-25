const baseUrl = 'http://localhost:8080'

export const fetchSources = () => {
  return fetch(`${baseUrl}/sources`)
    .then(res => res.json())
}
