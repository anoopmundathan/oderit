import React, { Component } from 'react'
import { Location, Permissions, MapView } from 'expo'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

class MapScreen extends Component {
  state = {
    mapLoaded: false,
    region: {
      longitude: null,
      latitude: null,
      longitudeDelta: null,
      latitudeDelta: null
    },
    locationResult: null,
    markers: []
  }

  componentDidMount() {
    this._getLocationAsync()
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    
    if(status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location denied'
      })
    }

    let location = await Location.getCurrentPositionAsync({})

    const { longitude, latitude } = location.coords
    this.setState({ 
      region: { 
        longitude,
        latitude,
        longitudeDelta: 0.01050350012498162,
        latitudeDelta: 0.010492913271392013
      },
      mapLoaded: true,
      markers: [{
        latitude, 
        longitude, 
        title: 'title', 
        description: 'description'
      }]
    })
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
      <View style={styles.container}>
      <MapView 
        region={this.state.region}
        onRegionChangeComplete={this.onRegionChangeComplete}
        style={styles.map}/>
        <MapView.Marker coordinate={{
          latitude: this.state.markers[0].latitude,
          longitude: this.state.markers[0].longitude,
          title: this.state.markers[0].title,
          description: this.state.markers[0].description
        }} />
      <View style={styles.buttonContainer}>
        <Button
          onPress={this.onButtonSearch}
          title="Search"
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  }
})
