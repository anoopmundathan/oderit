import { AsyncStorage } from 'react-native'
import { Facebook } from 'expo'
import { fetchFacebookInfo } from '../utils/api'
import { FB_LOGIN_SUCCESS, FB_LOGIN_FAIL } from '../action-types'

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
    const { name } = await fetchFacebookInfo(token)
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ token, name }))
    return dispatch( { type: FB_LOGIN_SUCCESS, payload: token, name })
  }

}
