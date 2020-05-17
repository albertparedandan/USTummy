import * as React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

import Colors from '../constants/Colors'

type Props = TextInputProps;

class StyledTextInput extends React.Component<Props> {
  render() {
    const { style, ...otherProps } = this.props;
    return (
      <TextInput
        selctionColor={Colors.comment}
        style={[styles.textInput, style]}
        {...otherProps}
      />
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.comment
  }
});

export default StyledTextInput;
