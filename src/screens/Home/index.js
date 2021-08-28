import React from 'react'
import { View, Text } from 'react-native'
import { MainLayout } from '@app/layouts'
import styles from './styles'

const HomeScreen = () => {
  return (
    <MainLayout>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text>Header</Text>
        </View>
        <View style={styles.body}>
          <Text>Body</Text>
        </View>
        <View style={styles.amount}>
          <Text>Amount</Text>
        </View>
      </View>
    </MainLayout>
  )
}

export default HomeScreen
