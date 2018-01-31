import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { red } from '../../utils/colors'

const CheckOutButton = (props) => {
  const { title } = props
  return(
    <View style={styles.button}>
      <Button
        onPress={props.onCheckOut}
        raised
        fontSize={20}
        borderRadius={3}
        backgroundColor={red}
        title={title} />
    </View>
  )
}

export default CheckOutButton

const styles = StyleSheet.create({
  button: {
    width: '100%', 
    marginTop: '1%', 
    marginBottom: '3%'
  }
})
