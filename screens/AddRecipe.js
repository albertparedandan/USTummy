import * as React from 'react'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import StyledButton from "../components/StyledButton"
import StyledTextInput from "../components/StyledTextInput"
import StyledText from '../components/StyledText'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Colors from '../constants/Colors'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      duration: '',
      cost: '',
      ingredients: '',
      steps: ''
    }
  }

  add_recipe = () => {
    var that = this
    const { title } = this.state
    const { duration } = this.state
    const { cost } = this.state
    const { ingredients } = this.state
    const { steps } = this.state
    if (title) {
      if (duration) {
        if (cost) {
          if (ingredients) {
            if (steps) {
              Alert.alert(title, 'Recipe Added Successfully')
            } else {
              Alert.alert('Adding recipe failed', 'Please enter steps to make this recipe')
            }
          } else {
            Alert.alert('Adding recipe failed', 'Please enter the ingredients for this recipe')
          }
        } else {
          Alert.alert('Adding recipe failed', 'Please enter the cost of this recipe')
        }
      } else {
        Alert.alert('Adding recipe failed', 'Please enter duration to cook recipe')
      }
    } else {
      Alert.alert('Adding recipe failed', 'Please enter recipe name')
    }
  }

  render () {
    return (
      <KeyboardAwareScrollView style={styles.outterContainer}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <StyledText
            style={styles.flavours}
            label='ADD A RECIPE'
          />
          <View style={styles.flavourContainer}>
            <TouchableOpacity>
              <Image
                source={require('../assets/images/icon.png')}
                style={styles.addImage}
              />
            </TouchableOpacity>
            <StyledTextInput
              placeholder='Recipe Title'
              onChangeText={title => this.setState({ title })}
              style={styles.addInputText}
            />
            <StyledTextInput
              placeholder='Recipe duration HH:MM'
              onChangeText={duration => this.setState({ duration })}
              style={styles.addInputText}
              autoCapitalize='none'
            />
            <StyledTextInput
              placeholder='Cost'
              onChangeText={cost => this.setState({ cost })}
              style={styles.addInputText}
            />
            <StyledTextInput
              placeholder='Ingredients'
              onChangeText={ingredients => this.setState({ ingredients })}
              style={styles.addInputText}
              multiline={true}
            />
            <StyledTextInput
              placeholder='Steps'
              onChangeText={steps => this.setState({ steps })}
              style={styles.addInputText}
              multiline={true}
            />
          </View>
          <View>
            <StyledButton
              label='ADD'
              customClick={this.add_recipe.bind(this)}
            />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
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
    alignItems: 'center'
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
  addInputText: {
    width: '80%',
    marginTop: 50,
    marginBottom: 20,
    color: Colors.foreground
  }
})

