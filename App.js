// # COMP 4521    #  Albert Paredandan        20373300          aparedandan@connect.ust.hk
import React from 'react'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import IndexScreen from './screens/IndexScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import American from './screens/cuisine/American'

import Colors from './constants/Colors'

const App = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      title: 'Register',
      headerStyle: { backgroundColor: Colors.purple },
      headerTintColor: Colors.foreground
    }
  },
  IndexScreen: {
    screen: IndexScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  American: {
    screen: American,
    navigationOptions: {
      title: 'American',
      headerStyle: { backgroundColor: Colors.purple },
      headerTintColor: Colors.foreground
    }
  }
})

export default createAppContainer(App)
