import React from 'react'
import { Modal as RNModal, View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const Modal = ({ visible, onCancel, title, children }) => {
  return (
    <RNModal visible={visible} transparent>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeBtn} onPress={onCancel}>
            <Text style={styles.closeIcon}>X</Text>
          </TouchableOpacity>
          {title && <Text style={styles.title}>Update Target Water</Text>}
          {children}
        </View>
      </View>
    </RNModal>
  )
}

export default Modal
