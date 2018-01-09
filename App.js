import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fetchStores } from './utils/api'


export default class App extends React.Component {
  

  render() {
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
