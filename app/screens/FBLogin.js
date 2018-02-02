import React from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  Modal,
  Platform, 
  TouchableOpacity } from 'react-native'
import { Button, FormLabel, FormInput  } from 'react-native-elements'
import { red, black, blue } from '../utils/colors'

const FBLogin = (props) => {
  return(
    <View>
      <Modal
        visible={props.visible}
        animationType={'slide'}
        onRequestClose={() => props.onModalClose()}>
        <View style={styles.modalContainer}>
          <View style={styles.header}></View>
          <View style={styles.cancelContainer}>
            <TouchableOpacity onPress={props.onModalClose}>
              <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <Button 
              large
              raised
              borderRadius={3}
              backgroundColor={blue}
              title='Login with Facebook' 
              onPress={props.onFBLogin} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default FBLogin

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fffff3'
  },
  header: {
    width: '100%', 
    height: 30, 
    backgroundColor: Platform.OS === 'ios' ? red : '#fff'
  },
  cancelContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? '10%' : '5%',
    right: '5%',
    width: 50,
    height: 50,
  },
  cancel: {
    fontSize: 16
  },
  buttonContainer: {
    flex: 1,
    width: '90%',
    marginTop: '30%'
  }
});
