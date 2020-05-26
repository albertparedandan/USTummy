// # COMP 4521    #  Albert Paredandan        20373300          aparedandan@connect.ust.hk
import * as React from 'react'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import StyledButton from "../components/StyledButton"
import StyledText from "../components/StyledText"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SearchBar } from 'react-native-elements';

import Colors from '../constants/Colors'

export default class HomeScreen extends React.Component {
  render () {
    return (
      <View style={styles.outterContainer}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <StyledText
            style={styles.flavours}
            label='MY RECIPES'
          />
          <View style={styles.flavourContainer}>
            <SearchBar
              placeholder='Search my recipe..'
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Pasta')}
            >
              <StyledText
                label='Pasta'
                style={styles.recipeTitle}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <StyledText
                label='Egg Sandwich'
                style={styles.recipeTitle}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <StyledText
                label='Spanish Omellette'
                style={styles.recipeTitle}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <StyledText
                label='Japanese Curry'
                style={styles.recipeTitle}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <StyledText
                label='Gyudon'
                style={styles.recipeTitle}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  outterContainer: {
    flex: 1,
    backgroundColor: Colors.background
  },
  contentContainer: {
    alignItems: 'center'
  },
  flavourContainer: {
    flex: 1,
    // backgroundColor: Colors.cyan,
    width: '80%',
  },
  flavours: {
    fontSize: 40,
    color: Colors.pink,
    fontWeight: 'bold',
    marginTop: 90,
    marginBottom: 20,
    marginLeft: '10%',
    alignSelf: 'flex-start'
  },
  addImage: {
    marginTop: 20,
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 100
  },
  recipeTitle: {
    marginTop: 50,
    color: Colors.foreground,
    fontSize: 30
  }
})
