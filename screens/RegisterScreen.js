import * as React from 'react'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ScrollView } from 'react-native-gesture-handler'
import StyledButton from "../components/StyledButton"
import StyledTextInput from "../components/StyledTextInput"
import Colors from "../constants/Colors"
import { openDatabase } from 'react-native-sqlite-storage'

var db = openDatabase({ name: 'UserDatabase.db' })

export default class RegisterScreen extends React.Component {
  render () {
    return (
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }} style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', flex: 1, width: '80%', alignSelf: 'center' } } style={ { width: '100%' } }>
          <View style={styles.scrollContainer}>
            <Image
              source={require('../assets/images/robot-prod.png')}
              style={styles.profile}
            />
            <StyledTextInput
              placeholder='Full Name'
              style={styles.registerInputText}
            />
            <StyledTextInput
              placeholder='HKUST Email'
              style={styles.registerInputText}
            />
            <StyledTextInput
              placeholder='Password'
              style={styles.registerInputText}
              secureTextEntry={true}
            />
            <StyledTextInput
              placeholder='Re-enter Password'
              style={styles.registerInputText}
              secureTextEntry={true}
            />
            <View style={styles.registerButton}>
              <StyledButton
                label='Register'
              />
              <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
                <Text style={styles.loginText}>Already have an account? Login here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    flexDirection: 'column'
  },
  scrollContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  registerInputText: {
    width: '80%',
    marginTop: 50,
    marginBottom: 20,
    color: Colors.foreground
  },
  profile: {
    marginBottom: 30
  },
  registerButton: {
    marginTop: 40,
    width: '100%',
    alignItems: 'center'
  },
  loginText: {
    color: Colors.foreground,
    marginTop: 15
  }
})
