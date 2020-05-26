// # COMP 4521    #  Albert Paredandan        20373300          aparedandan@connect.ust.hk
import * as React from 'react'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import StyledButton from "../../components/StyledButton"
import StyledText from '../../components/StyledText'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Colors from '../../constants/Colors'

export default class HomeScreen extends React.Component {
  render () {
    return (
      <View style={styles.outterContainer}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Image
            source={require('../../assets/images/my_recipes/pasta.png')}
            style={styles.recipeImage}
          />
          <View style={styles.flavourContainer}>
            <StyledText
              label='Pasta'
              style={styles.recipeTitle}
            />
            <StyledText
              label='Duration: 10 mins'
              style={styles.recipeText}
            />
            <StyledText
              label='Cost: $'
              style={styles.recipeText}
            />
            <Text
              style={styles.recipeHeader}
            >
            Ingredients:{'\n'}
            </Text>
            <Text
              style={styles.recipeSteps}
            >
            - 3 cloves of garlic {'\n'}
            - good olive oil {'\n'}
            - pasta {'\n'}
            - salt {'\n'}
            - chili flakes {'\n'}
            {'\n'}
            (Optional):{'\n'}
            - parsley {'\n'}
            - grated Parmesan {'\n'}
            </Text>
            <Text
              style={styles.recipeHeader}
            >
            Steps:{'\n'}
            </Text>
            <Text
              style={styles.recipeSteps}
            >
            1. Boil pasta until almost cooked in salted boiling water{'\n'}
            {'\n'}
            2. Slice garlic as thinly as possible {'\n'}
            {'\n'}
            3. Fry the garlic in a frying pan with olive oil on low heat{'\n'}
            {'\n'}
            4. Once the garlic is almost brown, add pasta water and stir to make the sauce{'\n'}
            {'\n'}
            5. Add pasta and mix. Enjoy!{'\n'}
            {'\n'}
            </Text>
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
    marginTop: 25,
    marginLeft: 25
  },
  recipeImage: {
    marginTop: 70,
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 100
  },
  recipeTitle: {
    fontSize: 40,
    color: Colors.foreground,
    marginBottom: 10
  },
  recipeText: {
    fontSize: 15,
    marginVertical: 15,
    color: Colors.foreground
  },
  recipeHeader: {
    fontSize: 30,
    marginTop: 15,
    color: Colors.foreground
  },
  recipeSteps: {
    fontSize: 15,
    marginTop: -30,
    color: Colors.foreground
  }
})
