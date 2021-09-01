import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { MainLayout } from '@app/layouts'
import {
  Amount,
  CountBadge,
  DailyGoal,
  HumanBody,
  Modal,
} from '@app/components'
import { getStoreAsync, updateStoreAsync } from '@app/utils/store'
import {
  getFormattedCountData,
  getFormattedBodyData,
  getUpdatedAddWaterAmountData,
  getUpdatedRemoveWaterAmountData,
  getUpdatedDailyGoalData,
} from './utils'
import styles from './styles'

const HomeScreen = () => {
  const [data, setData] = useState({})
  const [dailyGoalModalVisible, setDailyGoalModalVisible] = useState(false)

  const getStoreData = async () => {
    const storeData = await getStoreAsync()
    setData(storeData)
  }
  const updateStateAndStore = updatedData => {
    setData(updatedData)
    updateStoreAsync(updatedData)
  }

  useEffect(() => {
    getStoreData()
  }, [])

  const onAddWaterAmount = async amount => {
    const updatedData = getUpdatedAddWaterAmountData(data, amount)
    updateStateAndStore(updatedData)
  }
  const onRemoveWaterAmount = async amount => {
    const updatedData = getUpdatedRemoveWaterAmountData(data, amount)
    updateStateAndStore(updatedData)
  }
  const handleDailyGoalUpdate = dailyGoal => {
    const updatedData = getUpdatedDailyGoalData(data, dailyGoal)
    updateStateAndStore(updatedData)
    setDailyGoalModalVisible(false)
  }

  const onEditDailyGoalPress = () => {
    setDailyGoalModalVisible(true)
  }
  const handleEditDailyGoalModalCancel = () => {
    setDailyGoalModalVisible(false)
  }

  return (
    <>
      <MainLayout>
        <View style={[styles.content]}>
          <View style={styles.header}>
            <CountBadge data={getFormattedCountData(data)} />
          </View>
          <View style={styles.body}>
            <HumanBody
              data={getFormattedBodyData(data)}
              onEditDailyGoalPress={onEditDailyGoalPress}
            />
          </View>
          <View style={styles.amount}>
            <Amount
              onAddWaterAmount={onAddWaterAmount}
              onRemoveWaterAmount={onRemoveWaterAmount}
            />
          </View>
        </View>
      </MainLayout>
      <Modal
        title="Update Target Water"
        visible={dailyGoalModalVisible}
        onCancel={handleEditDailyGoalModalCancel}>
        <DailyGoal onUpdate={handleDailyGoalUpdate} />
      </Modal>
    </>
  )
}

export default HomeScreen
