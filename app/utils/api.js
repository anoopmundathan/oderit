const apiUrl = 'https://shrouded-caverns-78817.herokuapp.com/api/v1'
const fbUrl = 'https://graph.facebook.com/me?access_token='

export const fetchFacebookInfo = async token => {
  try {
    const response = await fetch(fbUrl + token)
    return await response.json()
  } catch(err) {
    return null
  }
}

export const fetchStores = async () => {
  try {
    const response = await fetch(`${apiUrl}/stores`)
    return await response.json()
  } catch(err) {
    return {
      error: 'Network error'
    }
  }
}

export const fetchItems = async (storeId) => {
  try {
    const response = await fetch(`${apiUrl}/stores/${storeId}/items`)
    return await response.json()
  } catch(err) {
    return {
      error: 'Network error'
    }
  }
}
