import * as React from 'react'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import StyledButton from "../components/StyledButton"
import StyledTextInput from "../components/StyledTextInput"
import Colors from "../constants/Colors"
import * as SQLite from 'expo-sqlite'

var db = SQLite.openDatabase({ name: 'UserDatabase.db', createFromLocation: 1 })

export default class LoginScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.loginLogoContainer}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.loginLogo}
          />
          <Text style={styles.loginLogoText}>An HKUST Cooking app for your tummy</Text>
        </View>
        <View style={styles.loginFormContainer}>
          <StyledTextInput
            placeholder="Email"
            style={styles.loginInputText}
            autoCapitalize='none'
          />
          <StyledTextInput
            placeholder="Password"
            style={styles.loginInputText}
            secureTextEntry={true}
          />
          <View style={styles.loginButton}>
            <StyledButton
              label="LOGIN"
              customClick = {() => this.props.navigation.replace('IndexScreen')}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('RegisterScreen')}>
            <Text style={styles.registerText}>New to USTummy? Register here</Text>
          </TouchableOpacity>
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
    justifyContent: 'center',
    width: '80%'
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
    height: 150,
    resizeMode: 'contain'
  },
  loginLogoText: {
    marginTop: 25,
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
    width: '100%',
    alignItems: 'center',
    marginTop: 20
  },
  registerText: {
    color: Colors.foreground,
    alignSelf: 'center',
    marginBottom: 20
  }
})
