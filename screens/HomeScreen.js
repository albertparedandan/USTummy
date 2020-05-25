import * as React from 'react'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import StyledButton from '../components/StyledButton'
import StyledText from '../components/StyledText'

import Colors from '../constants/Colors'

export default class HomeScreen extends React.Component {
  render () {
    return (
      <View style={styles.outterContainer}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <StyledText
            style={styles.flavours}
            label='FLAVOURS'
          />
          <View style={styles.flavourContainer}>
            <StyledText
              style={styles.cuisineText}
              label='Cuisines'
            />
            <View style={styles.flavourRow}>
              <ScrollView
                horizontal={true}
              >
                <Image
                  source={require('../assets/images/robot-prod.png')}
                  style={styles.cuisine}
                />
                <Image
                  source={require('../assets/images/robot-prod.png')}
                  style={styles.cuisine}
                />
                <Image
                  source={require('../assets/images/robot-prod.png')}
                  style={styles.cuisine}
                />
                <Image
                  source={require('../assets/images/robot-prod.png')}
                  style={styles.cuisine}
                />
              </ScrollView>
            </View>
            <StyledText
              style={styles.cuisineText}
              label='Tastes'
            />
            <View style={styles.flavourRow}>
              <ScrollView
                horizontal={true}
              >
                <Image
                  source={require('../assets/images/robot-prod.png')}
                  style={styles.cuisine}
                />
                <Image
                  source={require('../assets/images/robot-prod.png')}
                  style={styles.cuisine}
                />
                <Image
                  source={require('../assets/images/robot-prod.png')}
                  style={styles.cuisine}
                />
                <Image
                  source={require('../assets/images/robot-prod.png')}
                  style={styles.cuisine}
                />
              </ScrollView>
            </View>
            <StyledText
              style={styles.cuisineText}
              label='Time'
            />
            <View style={styles.flavourRow}>
              <ScrollView
                horizontal={true}
              >
                <Image
                  source={require('../assets/images/robot-prod.png')}
                  style={styles.cuisine}
                />
                <Image
                  source={require('../assets/images/robot-prod.png')}
                  style={styles.cuisine}
                />
                <Image
                  source={require('../assets/images/robot-prod.png')}
                  style={styles.cuisine}
                />
                <Image
                  source={require('../assets/images/robot-prod.png')}
                  style={styles.cuisine}
                />
              </ScrollView>
            </View>
            <StyledText
              style={styles.cuisineText}
              label='Cost'
            />
            <View style={styles.flavourRow}>
              <ScrollView
                horizontal={true}
              >
                <Image
                  source={require('../assets/images/robot-prod.png')}
                  style={styles.cuisine}
                />
                <Image
                  source={require('../assets/images/robot-prod.png')}
                  style={styles.cuisine}
                />
                <Image
                  source={require('../assets/images/robot-prod.png')}
                  style={styles.cuisine}
                />
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  outterContainer: {
    backgroundColor: Colors.background,
    height: '85%'
  },
  contentContainer: {
    alignItems: 'center'
  },
  flavourContainer: {
    flex: 1,
    backgroundColor: Colors.cyan,
    width: '80%'
  },
  flavourRow: {
    flexDirection: 'row',
    backgroundColor: Colors.red
  },
  flavours: {
    fontSize: 40,
    color: Colors.pink,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,
    marginLeft: '10%',
    alignSelf: 'flex-start'
  },
  cuisineText: {
    marginLeft: 10,
    marginVertical: 15,
    fontSize: 15,
    color: Colors.yellow
  },
  cuisine: {
    marginHorizontal: 10
  }
})
