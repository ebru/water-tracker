import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const CountBadge = ({ data }) => {
  const { dailyTotalWater, achievedGoalDays } = data

  return (
    <View style={styles.root}>
      <View style={styles.countWrapper}>
        <Text style={styles.count}>{dailyTotalWater / 1000} L</Text>
        <Text style={styles.description}>TOTAL WATER DRUNK</Text>
      </View>
      <View style={styles.countWrapper}>
        <Text style={styles.count}>{achievedGoalDays}</Text>
        <Text style={styles.description}>ACHIEVED GOAL DAYS</Text>
      </View>
    </View>
  )
}

export default CountBadge
