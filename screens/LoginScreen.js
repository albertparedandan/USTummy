import * as React from 'react'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import StyledButton from "../components/StyledButton"
import StyledTextInput from "../components/StyledTextInput"
import Colors from "../constants/Colors"

export default class LoginScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.loginLogoContainer}>
          <Image
            source={require('../assets/images/robot-prod.png')}
            style={styles.loginLogo}
          />
          <Text style={styles.loginLogoText}>An HKUST Cooking app for your tummy</Text>
        </View>
        <View style={styles.loginFormContainer}>
          <StyledTextInput placeholder="Email" style={styles.loginInputText} />
          <StyledTextInput placeholder="Password" style={styles.loginInputText} secureTextEntry={true} />
          <StyledButton label="LOGiIN" style={styles.loginButton} onPress = {() => this.props.navigation.navigate('LinkScreen')} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    flexDirection: 'column'
  },
  loginLogoContainer: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  loginFormContainer: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    width: '80%',
    justifyContent: 'center'
  },
  loginLogo: {
    width: 100,
    height: 100,
    marginTop: 50
  },
  loginLogoText: {
    marginTop: 8,
    marginBottom: 100,
    color: Colors.cyan
  },
  buttonContainer: {
    marginTop: 100
  },
  loginInputText: {
    width: '80%',
    marginBottom: 20,
    color: Colors.foreground
  },
  loginButton: {
    width: '80%'
  }
})
