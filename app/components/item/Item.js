import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { black, green } from '../../utils/colors'
import ItemBasket from './ItemBasket'

class Item extends Component {
  
  state = {
    count: 0
  }

  onRemovePress = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  onAddPress = () => {
    // dispatch action
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const { item } = this.props
    const { count } = this.state

    return(
      <View style={{ flex: 1 }}>

        <View style={styles.itemContainer}>
          <View style={{ flex: 2}}>
            <Text style={styles.name}>{item.name}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={styles.name}>INR  {item.price}</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Button 
              onPress={this.onAddPress}
              backgroundColor={green}
              borderRadius={3}
              title='+' />
          </View>
        </View>

        {this.state.count > 0 && (
          <ItemBasket 
            price={item.price * count}
            count={count}
            onPress={this.onRemovePress} />
        )}
      
      </View>  
    )
  }
}

export default Item

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    borderWidth: .5,
    borderColor: '#bdc6cf',
    paddingLeft: '7%'
  },
  name: {
    fontSize: 16,
    color: black
  }
})
