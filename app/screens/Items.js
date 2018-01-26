import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const items = [
  {name: 'Item1'},
  {name: 'Item2'},
  {name: 'Item3'},
  {name: 'Item4'},
  {name: 'Item5'},
  {name: 'Item6'},
  {name: 'Item7'},
  {name: 'Item8'},
  {name: 'Item9'}
]

class Items extends Component {
  render() {
    return items.map((item, index) => (
      <View key={index} style={styles.container}>
        <Text>{item.name}</Text>
      </View>)
    )
  }
}

export default Items

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
