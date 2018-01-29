import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Button, Divider, Text } from 'react-native-elements'
import { connect } from 'react-redux'
import { red, black } from '../utils/colors'
import Header from '../components/checkout/Header'
import ItemsHeader from '../components/checkout/ItemsHeader'

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
          <View style={{ flex: 2 }}>
            <Text>{item.name}</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Text>{item.price}</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Text>{item.qty}</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Text>{item.price * item.qty}</Text>
          </View>
        </View>
      )
    })

    return(

      <ScrollView>
        <View style={styles.container}>

          <Header 
            items={totalItems} 
            price={price} />

          <View style={{ width: '100%', marginTop: '1%', marginBottom: '3%'}}>
            <Button 
              raised
              fontSize={20}
              borderRadius={3}
              backgroundColor={red}
              title='CHECKOUT'/>
          </View>

          <ItemsHeader />

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
  item: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: '1%'
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
