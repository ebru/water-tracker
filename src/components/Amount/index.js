import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'

const INITIAL_AMOUNT = 250

const Amount = ({ onAddWaterAmount, onRemoveWaterAmount }) => {
  const [amount] = useState(INITIAL_AMOUNT)

  const handleAddAmount = async () => {
    onAddWaterAmount(amount)
  }
  const handleRemoveAmount = async () => {
    onRemoveWaterAmount(amount)
  }

  return (
    <View style={styles.root}>
      <View style={styles.amountWrapper}>
        <Text style={styles.amount}>150 ml</Text>
        <Text style={[styles.amount, styles.activeAmount]}>250 ml</Text>
        <Text style={styles.amount}>350 ml</Text>
      </View>
      <View style={styles.addAmount}>
        <TouchableOpacity onPress={handleRemoveAmount}>
          <View style={styles.amountIconWrapper}>
            <Image
              style={[styles.amountIcon, styles.minusIcon]}
              source={require('src/assets/icons/minus.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAddAmount}>
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
