// # COMP 4521    #  Albert Paredandan        20373300          aparedandan@connect.ust.hk
import * as React from 'react'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ScrollView } from 'react-native-gesture-handler'
import StyledButton from "../../components/StyledButton"
import StyledTextInput from "../../components/StyledTextInput"
import Colors from "../../constants/Colors"
import * as SQLite from 'expo-sqlite'

var db = SQLite.openDatabase({ name: 'UserDatabase.db' })

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      userEmail: '',
      userPassword: '',
      userPassword2: ''
    }
  }

  register_user = () => {
    var that = this
    const { username } = this.state
    const { userEmail } = this.state
    const { userPassword } = this.state
    const { userPassword2 } = this.state
    // alert(username, userEmail, userPassword, userPassword2)
    if (username) {
      if (userEmail) {
      // if (userEmail && userEmail.includes('@') && userEmail.includes('ust.hk')) {
        if (userPassword && userPassword2 && userPassword === userPassword2) {
          db.transaction(function (tx) {
            tx.executeSql(
              'INSERT INTO table_user (username, userEmail, userPassword) VALUES (?,?,?)',
              [username, userEmail, userPassword],
              (tx, results) => {
                console.log('Results', results.rowsAffected)
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Success',
                    'You are Registered Successfully',
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          that.props.navigation.navigate('HomeScreen')
                      }
                    ],
                    { cancelable: false }
                  )
                } else {
                  alert('Registration Failed')
                }
              }
            )
          })
        } else {
          Alert.alert('Registration Error', 'Check your passwords')
        }
      } else {
        Alert.alert('Registration Error', 'Invalid email. Must be a ust.hk email')
      }
    } else {
      Alert.alert('Registration Error', 'Please fill in your name')
    }
  }

  render () {
    return (
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }} style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', flex: 1, width: '80%', alignSelf: 'center' } } style={ { width: '100%' } }>
          <View style={styles.scrollContainer}>
            <Image
              source={require('../../assets/images/robot-prod.png')}
              style={styles.profile}
            />
            <StyledTextInput
              placeholder='Full Name'
              onChangeText={username => this.setState({ username })}
              style={styles.registerInputText}
            />
            <StyledTextInput
              placeholder='HKUST Email'
              onChangeText={userEmail => this.setState({ userEmail })}
              style={styles.registerInputText}
              autoCapitalize='none'
            />
            <StyledTextInput
              placeholder='Password'
              onChangeText={userPassword => this.setState({ userPassword })}
              style={styles.registerInputText}
              secureTextEntry={true}
            />
            <StyledTextInput
              placeholder='Re-enter Password'
              onChangeText={userPassword2 => this.setState({ userPassword2 })}
              style={styles.registerInputText}
              secureTextEntry={true}
            />
            <View style={styles.registerButton}>
              <StyledButton
                label='Register'
                customClick={this.register_user.bind(this)}
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
