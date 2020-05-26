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
            source={require('../../assets/images/my_recipes/fries.png')}
            style={styles.recipeImage}
          />
          <View style={styles.flavourContainer}>
            <StyledText
              label='French Fries'
              style={styles.recipeTitle}
            />
            <StyledText
              label='Duration: 15 mins'
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
            - 3 large potatoes {'\n'}
            - lots of oil {'\n'}
            - salt {'\n'}
            {'\n'}
            (Optional):{'\n'}
            - truffle oil {'\n'}
            - grated Parmesan {'\n'}
            - hot sauce {'\n'}
            </Text>
            <Text
              style={styles.recipeHeader}
            >
            Steps:{'\n'}
            </Text>
            <Text
              style={styles.recipeSteps}
            >
            1. Cut potatoes into long strips and put into a bowl of water to remove starch and prevent oxidizing process{'\n'}
            {'\n'}
            2. In a frying pan, heat up enough cooking oil to fully cover all the fries{'\n'}
            {'\n'}
            3. Fry the fries until golden brown, crispy and cooked through{'\n'}
            {'\n'}
            4. Add some salt while fries are still hot, you can also feel free to add some of your optional ingredients{'\n'}
            {'\n'}
            5. Enjoy!{'\n'}
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
