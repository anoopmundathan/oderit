import { 
  FETCH_STORES, 
  FETCH_ITEMS,
  ADD_ITEM, 
  UPDATE_ITEM,
  REMOVE_ITEM,
  FETCH_ERROR,
  FB_LOGIN_SUCCESS,
  FB_LOGIN_FAIL
} from '../action-types'
import { Facebook } from 'expo'
import { AsyncStorage } from 'react-native'
import { fetchStores, fetchItems } from '../utils/api'

export const STORAGE_KEY = 'Oderit:storageKey'

export const faceBookLogin = () => async dispatch => {
    let key = await AsyncStorage.getItem(STORAGE_KEY)

    if(key) {
      let { token, name } = await JSON.parse(key)
      dispatch({ type: FB_LOGIN_SUCCESS, payload: token, name })
    } else {
      doFaceBookLogin(dispatch)
    }
}

const doFaceBookLogin = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync('134228010721869', {
    permissions: ['public_profile']
  })

  if(type === 'cancel') {
    return dispatch({ type: FB_LOGIN_FAIL })
  } else {
    const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`)
    const data = await response.json()
    const name = data.name
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ token, name }))
    return dispatch( { type: FB_LOGIN_SUCCESS, payload: token, name })
  }
}

export const fetchStoresAction = () => async dispatch => {
  const stores = await fetchStores()
  const { error } = stores
  if(error) {
    dispatch({ type: FETCH_ERROR, error })
  } else {
    dispatch({ type: FETCH_STORES, stores })
  }
}

export const fetchItemsAction = (storeId, fn) => async dispatch => {
  
  const items = await fetchItems(storeId)
  const { error } = items
  
  if(error) {
    dispatch({ type: FETCH_ERROR, error })
  } else {
    dispatch({ type: FETCH_ITEMS, items })
    fn();
  }
}

export const addItemAction = item => {
  return {
    type: ADD_ITEM,
    item
  }
}

export const updateItemAction = (id, value) => {
  return {
    type: UPDATE_ITEM,
    id,
    value
  }
}

export const removeItemAction = id => {
  return {
    type: REMOVE_ITEM, 
    id
  }
}
