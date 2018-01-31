import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Modal, Button } from 'react-native'
import { Overlay } from 'react-native-elements'
import { connect } from 'react-redux'
import { red, black } from '../utils/colors'
import Header from '../components/checkout/Header'
import ItemsHeader from '../components/checkout/ItemsHeader'
import CheckOutButton from '../components/checkout/CheckOutButton'
import FBLogin from './FBLogin'

const headers = ['Item', 'Price', 'Qty', 'Total']

class CheckOutScreen extends Component {

  state = {
    visible: false
  }

  closeModal = () => {
    this.setState({ visible: false });
  }

  onCheckOut = () => {
    this.setState({ visible: true });
  }

  render() {
    
    const { basket } = this.props
    const totalItems = basket.length

    const price = basket.reduce((acc, item) => {
      return (item.price * item.qty) + acc
    }, 0)
    
    const listItems = basket.map((item, index) => {
      return(
        <View key={index} style={styles.itemContainer}>
          <View style={{ flex: 1 }}>
            <Text>{item.name}</Text>
          </View>
          <View style={styles.item}>
            <Text>{item.price}</Text>
          </View>
          <View style={styles.item}>
            <Text>{item.qty}</Text>
          </View>
          <View style={styles.item}>
            <Text>{item.price * item.qty}</Text>
          </View>
        </View>
      )
    })

    return(

      <ScrollView>

        <FBLogin 
          visible={this.state.visible} 
          onModalClose={this.closeModal} />

        <View style={styles.container}>
          <Header items={totalItems} price={price} />
          <CheckOutButton 
            onCheckOut={this.onCheckOut}
            title='Confirm checkout'/>
            
          <ItemsHeader headers={headers}/>

          <View>
            {listItems}
          </View>
          
          <View style={styles.grant}> 
            <Text style={styles.total}>GRANT TOTAL : INR {price}</Text>
          </View>

        </View>
      </ScrollView>
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
    alignItems: 'center'
  },
  itemContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: '1%'
  },
  item: {
    flex: 1, 
    alignItems: 'flex-end'
  },
  grant: {
    flex: 1, 
    width: '90%',
    alignItems: 'flex-end',
    marginTop: '3%'
  },
  total: {
    color: black, 
    fontSize: 16,
    fontWeight: 'bold' 
  }
})
