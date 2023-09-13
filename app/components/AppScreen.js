import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'
import React from 'react'

const AppScreen = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
        {children}
    </SafeAreaView>
  )
}

export default AppScreen

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})