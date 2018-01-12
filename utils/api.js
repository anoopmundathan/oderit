const apiUrl = 'http://localhost:3000/api/v1'

// GET /questions
export const fetchStores = () => {
  console.log(apiUrl)
  return fetch(`${apiUrl}/stores`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => ({
      error: 'Server is down'
    }))
}
