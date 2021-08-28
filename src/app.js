import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Home } from './screens'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  )
}

export default App
