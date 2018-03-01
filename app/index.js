import React, { Component } from 'react'
import { View } from 'react-native'
import { red } from './utils/colors'
import { MainNavigator } from './config/Navigator'
import { AppStatusBar } from './components/AppStatusBar'

import { Provider } from 'react-redux'
import store from './config/store'
import firebase from 'firebase'

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAi9_n8ibFzp52fSfMwCbMt4uoTKnrPbmk",
      authDomain: "oderit-store-68a2f.firebaseapp.com",
      databaseURL: "https://oderit-store-68a2f.firebaseio.com",
      projectId: "oderit-store-68a2f",
      storageBucket: "oderit-store-68a2f.appspot.com",
      messagingSenderId: "963864461335"
    })
  }
  render() {
    return(
      <Provider store={store}>
      <View style={{ flex: 1 }}>
        <AppStatusBar backgroundColor={red} barStyle='light-content' />
        <MainNavigator/>
      </View>
      </Provider>
    )
  }
}
