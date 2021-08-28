import AsyncStorage from '@react-native-async-storage/async-storage'

export const getItem = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (error) {
    // send error
  }
}

export const storeItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    // send error
  }
}

export const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (error) {
    // send error
  }
}
