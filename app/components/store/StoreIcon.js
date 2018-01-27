import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { red } from '../../utils/colors'

export const StoreIcon = () => {
  return(
    <View style={styles.storeIcon}>
        <Entypo 
          name='shop' 
          color={red} 
          size={60} />
    </View>
  )
}

const styles = StyleSheet.create({
  storeIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    flex: 1
  }
})
