import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements'
import StoreList from '../components/store'
import { fetchItemsAction } from '../actions'
import { connect } from 'react-redux'

class StoresScreen extends Component {

  onStorePressed = (storeId) => {
    // this.props.navigation.navigate('Items')
    this.props.getItems(storeId, () => {
      this.props.navigation.navigate('Items')
    })
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

mapDispatchToProps = dispatch => ({ 
  getItems: (storeId, fn) => dispatch(fetchItemsAction(storeId, fn)) 
})

export default connect(null, mapDispatchToProps)(StoresScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
