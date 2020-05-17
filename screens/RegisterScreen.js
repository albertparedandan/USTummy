import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import StyledButton from "../components/StyledButton";
import StyledTextInput from "../components/StyledTextInput";
import Colors from "../constants/Colors";

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent: 'center', flex : 1, width: '80%', alignSelf: 'center', }} style={{width: '80%'}}>
          <View style={styles.scrollContainer}>
            <StyledTextInput 
              placeholder="Full Name"
              style={styles.registerInputText}
            />
            <StyledTextInput 
              placeholder="HKUST Email"
              style={styles.registerInputText}
            />
            <StyledTextInput 
              placeholder="Password"
              style={styles.registerInputText}
            />
            <StyledTextInput 
              placeholder="Re-enter Password"
              style={styles.registerInputText}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    flexDirection: 'column',
    alignItems: 'center',
  },
  scrollContainer: {
    flexDirection: 'column',
  },
  registerInputText: {
    width: "80%",
    marginTop: 20,
    marginBottom: 20,
    color: Colors.foreground,
  },
});
