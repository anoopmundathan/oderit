import { FB_LOGIN_SUCCESS } from './types'
import { AsyncStorage } from 'react-native'
import { Facebook } from 'expo'

export const faceBookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token')

  if(token) {
    // dispatch action
    dispatch({ type: FB_LOGIN_SUCCESS, payload: token })
  } else {
    // start facebook login Process
    doFaceBookLogin(dispatch)
  }
}

const doFaceBookLogin = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync('133768444087878', {
    permissions: ['public_profile']
  })

  if(type === 'cancel') {
    return dispatch({ type: FB_LOGIN_FAIL })
  } else {
    await AsyncStorage.setItem('fb_token', token)
    return dispatch( { type: FB_LOGIN_SUCCESS, payload: token })
  }
}
