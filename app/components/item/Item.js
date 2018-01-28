import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { black, green } from '../../utils/colors'
import ItemBasket from './ItemBasket'
import { connect } from 'react-redux'
import { 
  addItemAction, 
  removeItemAction, 
  updateItemAction } from '../../actions'

class Item extends Component {
  
  state = {
    count: 0
  }

  onRemovePress = (id) => {
    const { count } = this.state
    console.log(id)
    
    if(count === 1) {
      this.props.removeFromBasket(id)
    } else {
      this.props.updateBasket(id, -1)
    }

    this.setState({ count: count - 1 })
  }

  onAddPress = (item) => {
    const { count } = this.state
    const { _id } = item
  
    if(count === 0 ) {
      // When you add new item, quantity should be 1
      item.qty = count + 1
      this.props.addToBasket(item)
    } else {
      this.props.updateBasket(_id, 1)
    }

    this.setState({ count: count + 1 })
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
              onPress={() => this.onAddPress(item)}
              backgroundColor={green}
              borderRadius={3}
              title='+' />
          </View>
        </View>

        {this.state.count > 0 && (
          <ItemBasket 
            id={item._id}
            price={item.price * count}
            count={count}
            onPress={this.onRemovePress} />
        )}
      
      </View>  
    )
  }
}

mapStateToProps = (state) => {
  return {
    basket: state.basket
  }
}

mapDispatchToProps = dispatch => {
  return {
    addToBasket: (item) => dispatch(addItemAction(item)),
    updateBasket: (id, value) => dispatch(updateItemAction(id, value)),
    removeFromBasket: (id) => dispatch(removeItemAction(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)

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
