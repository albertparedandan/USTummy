import * as React from 'react'
import { Text, StyleSheet, TextProps } from 'react-native'

import Colors from '../constants/Colors'

type Props = TextProps

export default class StyledText extends React.Component<Props> {
  render () {
    const { label, style, ...otherProps } = this.props
    return (
      <Text
        style={[styles.text, style]}
        {...otherProps}
      >
        { label }
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: Colors.yellow
  }
})
