import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Button from '../UI/Button'
import Input from '../UI/Input'
import styles from './styles'

const DailyGoal = ({ onUpdate }) => {
  const [dailyGoal, setDailyGoal] = useState(undefined)

  const handleUpdate = () => {
    if (dailyGoal) {
      onUpdate(dailyGoal)
    }
  }

  return (
    <View style={styles.root}>
      <Text style={styles.description}>
        Please enter your new water target below:
      </Text>
      <View style={styles.dailyGoalInput}>
        <Input
          onChange={setDailyGoal}
          keyboardType="number-pad"
          defaultFocused
        />
      </View>
      <View style={styles.updateBtn}>
        <Button title="Update" onPress={handleUpdate} />
      </View>
    </View>
  )
}

export default DailyGoal
