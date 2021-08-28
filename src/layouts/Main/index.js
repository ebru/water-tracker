import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'

const Layout = ({ children }) => {
  return <SafeAreaView style={styles.root}>{children}</SafeAreaView>
}

export default Layout
