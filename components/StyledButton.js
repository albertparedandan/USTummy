import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import Colors from '../constants/Colors'

interface Props {
  label: string;
  onPress: () => void;
}

class Button extends React.Component<Props> {
  render() {
    const { label, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: Colors.currentLine,
    padding: 8
  },
  text: {
    textAlign: "center",
    height: 20,
    color: Colors.foreground,
  }
});

export default Button;
