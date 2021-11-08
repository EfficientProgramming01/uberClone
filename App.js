import React from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'

const App = () => {
  return (
    <View style = {styles.container}>
       <HomeScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({

container:{
  flex:1
}


})
