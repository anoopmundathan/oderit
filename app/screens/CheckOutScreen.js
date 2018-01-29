import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Divider, Text } from 'react-native-elements'
import { connect } from 'react-redux'
import { red } from '../utils/colors'

class CheckOutScreen extends Component {

  render() {
    
    const { basket } = this.props

    const totalItems = basket.length
    
    const price = basket.reduce((acc, item) => {
      return (item.price * item.qty) + acc
    }, 0)
    
    const listItems = basket.map((item, index) => {
      return(
        <View key={index} style={styles.item}>
          <View style={{ flex: 2 }}><Text>{item.name}</Text></View>
          <View style={{ flex: 1 }}><Text>{item.price}</Text></View>
          <View style={{ flex: 1 }}><Text>{item.qty}</Text></View>
          <View style={{ flex: 1 }}><Text>{item.price * item.qty}</Text></View>
        </View>
      )
    })

    return(
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={{ fontSize: 18 }}>Total {totalItems} Items</Text>
          <Text style={{ fontSize: 22, marginTop: '3%' }}>INR {price}</Text>
        </View>

        <Button 
          backgroundColor={red}
          title='CHECKOUT'/>

        <View style={styles.itemsContainer}>
          <View style={styles.itemsHeader}>
            <View style={{ flex: 2 }}><Text style={styles.title}>Item</Text></View>
            <View style={{ flex: 1 }}><Text style={styles.title}>Price</Text></View>
            <View style={{ flex: 1 }}><Text style={styles.title}>Qty</Text></View>
            <View style={{ flex: 1 }}><Text style={styles.title}>Total</Text></View>
          </View>

          <View>
            {listItems}
          </View>

        </View>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    basket: state.basket
  }
}

export default connect(mapStateToProps)(CheckOutScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '3%'
  },
  header: {
    margin: '8%',
    alignItems: 'center'
  },
  itemsContainer: {
    width: '90%',
    marginTop: '5%',
  },
  itemsHeader: {
    flexDirection: 'row',
    marginTop: '1%',
    marginBottom: '3%'
  },
  itemContainer: {

  },
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: '1%'
  },
  title: {
    fontSize: 20
  }
  
})
