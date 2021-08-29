import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'

const Amount = () => {
  return (
    <View style={styles.root}>
      <View style={styles.amountWrapper}>
        <Text style={styles.amount}>150 ml</Text>
        <Text style={[styles.amount, styles.activeAmount]}>250 ml</Text>
        <Text style={styles.amount}>350 ml</Text>
      </View>
      <View style={styles.addAmount}>
        <TouchableOpacity onPress={() => null}>
          <View style={styles.amountIconWrapper}>
            <Image
              style={[styles.amountIcon, styles.minusIcon]}
              source={require('src/assets/icons/minus.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => null}>
          <View style={styles.amountIconWrapper}>
            <Image
              style={[styles.amountIcon, styles.plusIcon]}
              source={require('src/assets/icons/plus.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Amount
