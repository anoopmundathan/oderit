import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements'
import ItemsList from '../components/item'

class ItemsScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <SearchBar 
          lightTheme 
          placeholder='Search here' />
        <ItemsList />
      </View>
    )
  }
}

export default ItemsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
