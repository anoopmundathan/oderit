import React, { Component } from 'react'
import { Ionicons, MaterialIcons, Octicons, Entypo } from '@expo/vector-icons'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { gray, red } from '../utils/colors'
import { View, Text } from 'react-native'

import MapScreen from '../screens/MapScreen'
import Settings from '../screens/Settings'
import Orders from '../screens/Orders'
import StoresScreen from '../screens/StoresScreen'
import ItemsScreen from '../screens/ItemsScreen'
import CheckOutScreen from '../screens/CheckOutScreen'
import Confirmation from '../screens/Confirmation'
import Delivery from '../screens/DeliveryMethod'

export const MainNavigator = TabNavigator({
  Main: {
    screen: StackNavigator({
      Map: {
        screen: MapScreen,
        navigationOptions: { 
          header: null,
          headerTitle: 'Home'
        }
      },
      Stores: {
        screen: StoresScreen,
        navigationOptions: {
          headerTitle: 'Stores',
          headerTintColor: red
        }
      },
      Items: {
        screen: ItemsScreen,
        navigationOptions: {
          headerTitle: 'Items',
          headerTintColor: red
        }
      },
      CheckOut: {
        screen: CheckOutScreen,
        navigationOptions: {
          headerTitle: 'Basket',
          headerTintColor: red
        }
      },
      Confirmation: {
        screen: Confirmation,
        navigationOptions: {
          headerTitle: 'Confirm Details',
          headerTintColor: red
        }
      },
      Delivery: {
        screen: Delivery,
        navigationOptions: {
          headerTitle: 'Payment',
          headerTintColor: red
        }
      }
    }, {
      navigationOptions: {
        title: 'Stores',
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons 
            color={tintColor}
            name='local-grocery-store' 
            size={30} />
        )
      }
    })
  },
  Orders: {
    screen: Orders,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Octicons 
          color={tintColor}
          name='list-unordered' 
          size={30} />
      )
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons 
          color={tintColor}
          name='ios-settings' 
          size={30} />
      )
    }
  }}, 
  { 
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: red,
      inactiveTintColor: gray,
      style: {
        height: 56,
        backgroundColor: '#fff',
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)
