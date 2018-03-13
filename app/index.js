import React, { Component } from 'react'
import { View } from 'react-native'
import { red } from './utils/colors'
import { MainNavigator } from './config/Navigator'
import { AppStatusBar } from './components/AppStatusBar'

import { Provider } from 'react-redux'
import store from './config/store'
import { config } from './config'

import firebase from 'firebase'

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config)
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
