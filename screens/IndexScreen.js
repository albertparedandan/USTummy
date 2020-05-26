// # COMP 4521    #  Albert Paredandan        20373300          aparedandan@connect.ust.hk
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
import Japanese from './cuisine/Japanese'
import Italian from './cuisine/Italian'
import Indian from './cuisine/Indian'
import Chinese from './cuisine/Chinese'

import Spicy from './tastes/Spicy'
import Salty from './tastes/Salty'
import Soupy from './tastes/Soupy'
import Savoury from './tastes/Savoury'
import Sweet from './tastes/Sweet'

import Fast from './time/10mins'
import MediumFast from './time/15mins'
import MediumSlow from './time/20mins'
import Slow from './time/25mins'

import Cheap from './cost/Cheap'
import Medium from './cost/Medium'
import Expensive from './cost/Expensive'

import Fries from './my_recipes/Fries'
import Pasta from './my_recipes/Pasta'

const HomeStack = createStackNavigator()
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
    <HomeStack.Screen name='American' component={American} />
    <HomeStack.Screen name='Japanese' component={Japanese} />
    <HomeStack.Screen name='Chinese' component={Chinese} />
    <HomeStack.Screen name='Italian' component={Italian} />
    <HomeStack.Screen name='Indian' component={Indian} />

    <HomeStack.Screen name='Spicy' component={Spicy} />
    <HomeStack.Screen name='Salty' component={Salty} />
    <HomeStack.Screen name='Fries' component={Fries} />
    <HomeStack.Screen name='Soupy' component={Soupy} />
    <HomeStack.Screen name='Savoury' component={Savoury} />
    <HomeStack.Screen name='Sweet' component={Sweet} />

    <HomeStack.Screen name='Fast' component={Fast} />
    <HomeStack.Screen name='MediumFast' component={MediumFast} />
    <HomeStack.Screen name='MediumSlow' component={MediumSlow} />
    <HomeStack.Screen name='Slow' component={Slow} />

    <HomeStack.Screen name='Cheap' component={Cheap} />
    <HomeStack.Screen name='Medium' component={Medium} />
    <HomeStack.Screen name='Expensive' component={Expensive} />

  </HomeStack.Navigator>
)

const MyRecipeStack = createStackNavigator()
const MyRecipesStackScreen = () => (
  <MyRecipeStack.Navigator>
    <MyRecipeStack.Screen name='My Recipes' component={MyRecipes} />
    <MyRecipeStack.Screen name='Pasta' component={Pasta} />
  </MyRecipeStack.Navigator>
)

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
      <Tab.Screen name='Home' component={HomeStackScreen} />
      <Tab.Screen name='Add' component={AddRecipe} />
      <Tab.Screen name='My Recipes' component={MyRecipesStackScreen} />
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
