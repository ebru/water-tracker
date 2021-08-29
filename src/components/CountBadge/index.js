import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const CountBadge = () => {
  return (
    <View style={styles.root}>
      <View style={styles.countWrapper}>
        <Text style={styles.count}>2.4 L</Text>
        <Text style={styles.description}>TOTAL WATER DRUNK</Text>
      </View>
      <View style={styles.countWrapper}>
        <Text style={styles.count}>15</Text>
        <Text style={styles.description}>ACHIEVED GOAL DAYS</Text>
      </View>
    </View>
  )
}

export default CountBadge
