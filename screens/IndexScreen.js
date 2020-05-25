import * as React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'

const Tab = createBottomTabNavigator()

function MyTabs () {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={LoginScreen} />
    </Tab.Navigator>
  )
}

export default function App () {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}
