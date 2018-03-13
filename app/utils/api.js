const fbUrl = 'https://graph.facebook.com/me?access_token='

export const STORAGE_KEY = 'Oderit:storageKey'

export const fetchFacebookInfo = async token => {
  try {
    const response = await fetch(fbUrl + token)
    return await response.json()
  } catch(err) {
    return null
  }
}

export const getStorageKey = async () => {
  let key = await AsyncStorage.getItem(STORAGE_KEY)
  return key ? JSON.parse(key) : null
}
