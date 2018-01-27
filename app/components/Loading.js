import React from 'react'
import { 
  View, 
  Text, 
  ActivityIndicator, 
  StyleSheet } from 'react-native'

export const Loading = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.loading}>Loading...</Text>
      <ActivityIndicator size="large" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    marginBottom: 15
  }
})
