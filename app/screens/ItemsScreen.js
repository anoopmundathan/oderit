import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements'
import ItemsList from '../components/item'
import Basket from '../components/item/Basket'

import { connect } from 'react-redux'

class ItemsScreen extends Component {

  onBasketPressed = () => {
    console.log('onBasket Clicked')
    this.props.navigation.navigate('CheckOut')
  }

  render() {
    const { basket } = this.props

    return(
      <View style={styles.container}>
        <SearchBar 
          lightTheme 
          placeholder='Search here' />
        <ItemsList />
        {basket.length > 0 && (
          <Basket 
            onPress={this.onBasketPressed}
            items={basket}/>
          )}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    basket: state.basket
  }
}

export default connect(mapStateToProps)(ItemsScreen)

const styles = StyleSheet.create({
  container: {
    flex: 2
  }
})
