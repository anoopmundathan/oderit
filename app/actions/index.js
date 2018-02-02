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

export const faceBookLogin = () => async dispatch => {

    let token = await AsyncStorage.getItem('fb_token')
    if(token) {
      dispatch({ type: FB_LOGIN_SUCCESS, payload: token })
    } else {
      doFaceBookLogin()
    }
}

const doFaceBookLogin = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync('134228010721869', {
    permissions: ['public_profile']
  })

  if(type === 'cancel') {
    return dispatch({ type: FB_LOGIN_FAIL })
  } else {
    await AsyncStorage.setItem('fb_token', token)
    return dispatch( { type: FB_LOGIN_SUCCESS, payload: token })
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
