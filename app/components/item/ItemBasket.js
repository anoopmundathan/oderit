import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { red, black } from '../../utils/colors'

class ItemBasket extends Component {
  
  _onPress = () => {
    this.props.onPress(this.props.id)
  }
  render() {
    const { id, price, count } = this.props

    return(
      <View style={styles.container}>

        <View style={{ flex: .75 }}>
          <Button 
            onPress={this._onPress}
            backgroundColor={red}
            borderRadius={3}
            title='-' />
        </View>

        <View style={{ flex: 2}}>
          <Text style={styles.price}>INR {price}</Text>
        </View>

        <View style={{ flex: 1}}>
          <Text>{count}</Text>
        </View>

      </View>
    )
  }
}

export default ItemBasket

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderWidth: .5,
    borderColor: '#bdc6cf',
    backgroundColor: '#fff'
  },
  price: {
    fontSize: 16,
    color: '#56A902'
  },
  count: {

  }
})

