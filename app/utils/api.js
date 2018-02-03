// const apiUrl = 'http://localhost:3000/api/v1'
const apiUrl = 'https://shrouded-caverns-78817.herokuapp.com/api/v1'
const fbUrl = 'https://graph.facebook.com/me?access_token='

export const fetchFacebookInfo = async token => {
  try {
    const response = await fetch(fbUrl + token)
    const data = await response.json()
    return data
  } catch(err) {
    return null
  }
}

export const fetchStores = async () => {
  try {
    const response = await fetch(`${apiUrl}/stores`)
    const data = await response.json()
    return data
  } catch(err) {
    return {
      error: 'Network error'
    }
  }
}

export const fetchItems = async (storeId) => {
  try {
    const response = await fetch(`${apiUrl}/stores/${storeId}/items`)
    const data = await response.json()
    return data 
  } catch(err) {
    return {
      error: 'Network error'
    }
  }
}
