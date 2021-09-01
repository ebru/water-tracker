import React, { useState } from 'react'
import HorizontalPicker from '@vseslav/react-native-horizontal-picker'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { wp } from '@app/utils/responsive'
import styles from './styles'

const AMOUNTS = [150, 250, 350]
const INITIAL_AMOUNT_INDEX = 1

const Amount = ({ onAddWaterAmount, onRemoveWaterAmount }) => {
  const [amountIndex, setAmountIndex] = useState(INITIAL_AMOUNT_INDEX)

  const handleAddAmount = async () => {
    onAddWaterAmount(AMOUNTS[amountIndex])
  }
  const handleRemoveAmount = async () => {
    onRemoveWaterAmount(AMOUNTS[amountIndex])
  }

  const renderAmountItem = (item, index) => {
    return (
      <View style={styles.amountItem}>
        <Text
          style={[styles.amount, index === amountIndex && styles.activeAmount]}>
          {item} ml
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.root}>
      <View style={styles.amountWrapper}>
        <HorizontalPicker
          data={AMOUNTS}
          renderItem={renderAmountItem}
          itemWidth={wp(30)}
          defaultIndex={INITIAL_AMOUNT_INDEX}
          onChange={setAmountIndex}
        />
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
