import React, { Component } from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'
import { Button, CheckBox } from 'react-native-elements'
import { red } from '../utils/colors'
import FinalScreen from './FinalScreen'
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux'
import { clearBasket } from '../actions'

class DeliveryMethod extends Component {

  state = {
    checked: true,
    ordered: false
  }

  onPress = () => {
    this.setState({ ordered: true })
  }

  onClose = () => {
    this.props.emptyBasket()
    this.setState( { ordered: false }, () => {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Stores' })],
      });
      this.props.navigation.dispatch(resetAction)
    })
  }

  render() {    
    console.log('Delivery ', this.props)
    return(
      <View style={{ flex: 1 }}>
        <View>
          <View style={styles.checkbox}>
            <CheckBox
              center
              title='Cash on Delivery'
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={this.state.checked} />
            <CheckBox 
              center 
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              title='Debit card or CC' />
          </View>
          <Button
            onPress={this.onPress}
            raised
            fontSize={20}
            borderRadius={3}
            backgroundColor={red}
            title='PLACE ORDER' />
        </View>
        <FinalScreen
          ordered={this.state.ordered}
          onClose={this.onClose} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkbox: {
    marginTop: 30,
    marginBottom: 30
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    emptyBasket: () => dispatch(clearBasket())
  }
}
export default connect(null, mapDispatchToProps)(DeliveryMethod)
