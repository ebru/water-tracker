import React from 'react'
import { View } from 'react-native'
import { MainLayout } from '@app/layouts'
import { Amount, CountBadge, HumanBody } from '@app/components'
import styles from './styles'

const HomeScreen = () => {
  return (
    <MainLayout>
      <View style={styles.content}>
        <View style={styles.header}>
          <CountBadge />
        </View>
        <View style={styles.body}>
          <HumanBody />
        </View>
        <View style={styles.amount}>
          <Amount />
        </View>
      </View>
    </MainLayout>
  )
}

export default HomeScreen
