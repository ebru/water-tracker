import React, { useRef, useEffect } from 'react'
import { TextInput, Text, View } from 'react-native'
import styles from './styles'

const Input = ({
  value,
  onChange,
  placeholder,
  keyboardType,
  defaultFocused,
}) => {
  const inputRef = useRef(null)

  useEffect(() => {
    if (defaultFocused) {
      inputRef.current.focus()
    }
  }, [defaultFocused])

  return (
    <View style={styles.root}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
      <Text style={styles.postFix}>ml</Text>
    </View>
  )
}

export default Input
