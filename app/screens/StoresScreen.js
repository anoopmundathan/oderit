import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements'
import StoreList from '../components/store'

class StoresScreen extends Component {

  onStorePressed = () => {
    this.props.navigation.navigate('Items')
  }

  render() {
    return(
      <View style={styles.container}>
        <SearchBar 
          lightTheme 
          placeholder='Search here' />
        <StoreList 
          onPress={this.onStorePressed} />
      </View>
    )
  }

}

export default StoresScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
