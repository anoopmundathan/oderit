import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { black } from '../../utils/colors'

const ItemsHeader = (props) => {  
  const { headers } = props
  return(
    <View style={styles.container}>
      {headers.map((header, index) => (
        <View 
          key={header} 
          style={{ flex: 1, alignItems: index === 0 ? 'flex-start' : 'flex-end' }}>
          <Text style={styles.title}>{header}</Text>
        </View>)
      )}
    </View>
  )
}

export default ItemsHeader

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    marginTop: '5%',
    marginBottom: '3%',
    backgroundColor: '#E0E3DA',
    justifyContent: 'space-around',
    paddingTop: '1%',
    paddingBottom: '1%'
  },
  title: {
    fontSize: 18,
    color: black
  }
})
