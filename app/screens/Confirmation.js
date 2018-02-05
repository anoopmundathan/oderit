import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { FormInput, FormLabel, Button } from 'react-native-elements'
import { STORAGE_KEY } from '../actions'
import { red } from '../utils/colors'

const PHONE = '9999999999'
const ADDRESS = 'Address Goes here'

class Confirmation extends Component {
  state = {
    name: ''
  }

  async componentDidMount() {
    let key = await AsyncStorage.getItem(STORAGE_KEY)
    if (key) {
      let { name } = JSON.parse(key)  
      name ? this.setState( { name }) : ''
    }
  }

  onPress = () => {
    this.props.navigation.navigate('Delivery')
  }

  render() {
    const { name } = this.state
    return(
      <View>
        <Text>{this.props.name}</Text>
        <FormLabel>Name</FormLabel>
        <FormInput value={name}></FormInput>
        
        <FormLabel>Phone</FormLabel>
        <FormInput value={PHONE}></FormInput>
        
        <FormLabel>Address</FormLabel>
        <FormInput value={ADDRESS}></FormInput>

        <Button
          onPress={this.onPress}
          raised
          fontSize={20}
          borderRadius={3}
          backgroundColor={red}
          title='Continue Payment' />

      </View>
    )
  }
}

export default Confirmation

