// # COMP 4521    #  Albert Paredandan        20373300          aparedandan@connect.ust.hk
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
                showsHorizontalScrollIndicator={false}
              >
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('American')}
                >
                  <Image
                    source={require('../assets/images/cuisine/american.png')}
                    style={styles.cuisine}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Japanese')}
                >
                  <Image
                    source={require('../assets/images/cuisine/japanese.png')}
                    style={styles.cuisine}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Chinese')}
                >
                  <Image
                    source={require('../assets/images/cuisine/chinese.png')}
                    style={styles.cuisine}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Italian')}
                >
                  <Image
                    source={require('../assets/images/cuisine/italian.png')}
                    onPress={() => this.props.navigation.navigate('Italian')}
                    style={styles.cuisine}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Indian')}
                >
                  <Image
                    source={require('../assets/images/cuisine/indian.png')}
                    style={styles.cuisine}
                  />
                </TouchableOpacity>
              </ScrollView>
            </View>
            <StyledText
              style={styles.cuisineText}
              label='Tastes'
            />
            <View style={styles.flavourRow}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Spicy')}
                >
                  <Image
                    source={require('../assets/images/taste/spicy.png')}
                    style={styles.cuisine}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Salty')}
                >
                  <Image
                    source={require('../assets/images/taste/salty.png')}
                    style={styles.cuisine}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Soupy')}
                >
                  <Image
                    source={require('../assets/images/taste/soupy.png')}
                    style={styles.cuisine}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Savoury')}
                >
                  <Image
                    source={require('../assets/images/taste/savoury.png')}
                    style={styles.cuisine}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Sweet')}
                >
                  <Image
                    source={require('../assets/images/taste/sweet.png')}
                    style={styles.cuisine}
                  />
                </TouchableOpacity>
              </ScrollView>
            </View>
            <StyledText
              style={styles.cuisineText}
              label='Time'
            />
            <View style={styles.flavourRow}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Fast')}
                >
                  <Image
                    source={require('../assets/images/time/fast.png')}
                    style={styles.cuisine}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('MediumFast')}
                >
                  <Image
                    source={require('../assets/images/time/medium-fast.png')}
                    style={styles.cuisine}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('MediumSlow')}
                >
                  <Image
                    source={require('../assets/images/time/medium-slow.png')}
                    style={styles.cuisine}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Slow')}
                >
                  <Image
                    source={require('../assets/images/time/slow.png')}
                    style={styles.cuisine}
                  />
                </TouchableOpacity>
              </ScrollView>
            </View>
            <StyledText
              style={styles.cuisineText}
              label='Cost'
            />
            <View style={styles.flavourRow}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Cheap')}
                >
                  <Image
                    source={require('../assets/images/price/cheap.png')}
                    style={styles.cuisine}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Medium')}
                >
                  <Image
                    source={require('../assets/images/price/medium.png')}
                    style={styles.cuisine}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Expensive')}
                >
                  <Image
                    source={require('../assets/images/price/expensive.png')}
                    style={styles.cuisine}
                  />
                </TouchableOpacity>
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
    flex: 1,
    backgroundColor: Colors.background
  },
  contentContainer: {
    alignItems: 'center'
  },
  flavourContainer: {
    flex: 1,
    // backgroundColor: Colors.cyan,
    width: '80%'
  },
  flavourRow: {
    flexDirection: 'row',
    // backgroundColor: Colors.red
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
  cuisineText: {
    marginVertical: 15,
    fontSize: 15,
    color: Colors.cyan
  },
  cuisine: {
    marginRight: 20
  }
})
