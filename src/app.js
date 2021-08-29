import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { initializeStore } from './utils/store'
import { Home } from './screens'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
    initializeStore()
  }, [])

  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  )
}

export default App
