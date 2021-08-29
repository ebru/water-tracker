import AsyncStorage from '@react-native-async-storage/async-storage'
import DateUtil from '@app/utils/date'
import { STORE_KEY, INITIAL_DAILY_GOAL } from '@app/constants'

export const getItem = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (error) {
    // error handling
  }
}

export const storeItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    // error handling
  }
}

export const getStoreAsync = async () => {
  return await getItem(STORE_KEY)
}
export const updateStoreAsync = async updatedData => {
  await storeItem(STORE_KEY, updatedData)
}

export const initializeStore = async () => {
  const currentStore = await getStoreAsync()

  const initialStore = {
    [DateUtil.today()]: {
      dailyTotalWater: 0,
      achieved: false,
    },
  }
  let store

  if (!currentStore) {
    store = {
      achievedGoalDays: 0,
      dailyGoal: INITIAL_DAILY_GOAL,
      ...initialStore,
    }
  }
  if (currentStore && !currentStore[DateUtil.today()]) {
    store = {
      achievedGoalDays: currentStore.achievedGoalDays,
      dailyGoal: currentStore.dailyGoal,
      ...initialStore,
    }
  }
  updateStoreAsync(store)
}
