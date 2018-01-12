import React from 'react';
import { 
  Image, 
  Text, 
  View,
  StyleSheet } from 'react-native'

import { Provider } from 'react-redux'
import store from './store'

import { TabNavigator } from 'react-navigation'
import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'

const Hello = () => <View><Text>Hello</Text></View>
const About = () => <View><Text>About</Text></View>

const MainNavigator = TabNavigator({
  auth: {
    screen: AuthScreen
  },
  welcome: {
    screen: WelcomeScreen
  }, 
  settings: {
    screen: TabNavigator({
      Hello: {
        screen: Hello
      },
      About: {
        screen: About
      }
    })
  }
})

export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
