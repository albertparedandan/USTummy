import * as React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack'

import Colors from '../constants/Colors'
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import AddRecipe from './AddRecipe'
import American from './cuisine/American'
import MyRecipes from './MyRecipes'

const HomeStack = createStackNavigator();

const Tab = createBottomTabNavigator()

function MyTabs () {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home';
          } else if (route.name === 'My Recipes') {
            iconName = focused ? 'ios-journal' : 'ios-journal';
          } else if (route.name === 'Add') {
            iconName = focused ? 'ios-add' : 'ios-add'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.red,
        inactiveTintColor: Colors.currentLine,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Add" component={AddRecipe} />
      <Tab.Screen name="My Recipes" component={MyRecipes} />
    </Tab.Navigator>
  )
}

export default function App () {
  return (
    <NavigationContainer>
      <MyTabs
      />
    </NavigationContainer>
  )
}
