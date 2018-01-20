import React, { Component } from 'react'
import { MapView } from 'expo'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

class MapScreen extends Component {
  state = {
    mapLoaded: false,
    region: {
      longitude: -3.3958619999999655,
      latitude: 55.21728951914383,
      longitudeDelta: 100,
      latitudeDelta: 100
    }
  }

  componentDidMount() {
    this.setState({ mapLoaded: true })
  }

  onRegionChangeComplete = (region) => {
    this.setState( { region })
  }

  onButtonSearch = () => {
    // Invoke action creator and fetch stores in that location
    console.log(this.state.region)
  }

  render() {
    const { mapLoaded, region } = this.state

    if(!mapLoaded) {
      return(
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      )
    }

    return(
      <View style={{ flex: 1 }}>
      <MapView 
        region={this.state.region}
        onRegionChangeComplete={this.onRegionChangeComplete}
        style={{flex: 1}}/>
      <View style={styles.buttonContainer}>
        <Button
          onPress={this.onButtonSearch}
          title="Search "
          backgroundColor='#009686'
          icon={ { name: 'search' }}
          large/>
      </View>
      </View>
    ) 
  }
}

export default MapScreen

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  }
})
