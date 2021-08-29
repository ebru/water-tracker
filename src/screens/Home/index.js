import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { MainLayout } from '@app/layouts'
import { Amount, CountBadge, HumanBody } from '@app/components'
import { getStoreAsync, updateStoreAsync } from '@app/utils/store'
import {
  getFormattedCountData,
  getFormattedBodyData,
  getUpdatedAddWaterAmountData,
  getUpdatedRemoveWaterAmountData,
} from './utils'
import styles from './styles'

const HomeScreen = () => {
  const [data, setData] = useState({})

  const getStoreData = async () => {
    const storeData = await getStoreAsync()
    setData(storeData)
  }

  useEffect(() => {
    getStoreData()
  }, [])

  useEffect(() => {
    console.log('data', data)
  }, [data])

  const onAddWaterAmount = async amount => {
    const updatedData = getUpdatedAddWaterAmountData(data, amount)
    setData(updatedData)
    updateStoreAsync(updatedData)
  }
  const onRemoveWaterAmount = async amount => {
    const updatedData = getUpdatedRemoveWaterAmountData(data, amount)
    setData(updatedData)
    updateStoreAsync(updatedData)
  }

  return (
    <MainLayout>
      <View style={styles.content}>
        <View style={styles.header}>
          <CountBadge data={getFormattedCountData(data)} />
        </View>
        <View style={styles.body}>
          <HumanBody data={getFormattedBodyData(data)} />
        </View>
        <View style={styles.amount}>
          <Amount
            onAddWaterAmount={onAddWaterAmount}
            onRemoveWaterAmount={onRemoveWaterAmount}
          />
        </View>
      </View>
    </MainLayout>
  )
}

export default HomeScreen
