import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './styles'

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>{title && title.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button
