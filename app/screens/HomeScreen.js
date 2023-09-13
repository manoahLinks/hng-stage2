import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppScreen } from '../components'

const HomeScreen = ({navigation}) => {
  return (
    <AppScreen>
      <Text>HomeScreen</Text>
      <Button 
        title='edit cv'
        onPress={() => navigation.navigate("Edit-cv")}
      />
    </AppScreen>
  )
}

const styles = StyleSheet.create({})

export default HomeScreen;