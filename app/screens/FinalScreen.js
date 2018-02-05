import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  Modal, 
  TouchableOpacity } from 'react-native'

class FinalScreen extends Component {
  render() {  
    return(
      <View>
        <Modal
          visible={this.props.ordered}
          animationType={'slide'}
          onRequestClose={() => this.props.onClose}>
          <View style={styles.container}>
            <Text style={styles.message}>Order has been placed</Text>
            <TouchableOpacity
              onPress={this.props.onClose}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    fontWeight: 'bold',
    fontSize: 30
  }
})

export default FinalScreen

