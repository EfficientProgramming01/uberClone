import React from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native'
import { OriginContextProvider,DestinationContextProvider } from './src/contexts/contexts'
import RoootNavigator from './src/navigations/RootNavigator'


const App = () => {
  return (
  <DestinationContextProvider>
    <OriginContextProvider>
        <RoootNavigator />
    </OriginContextProvider>
   </DestinationContextProvider>
   
  )
}

export default App

const styles = StyleSheet.create({

container:{
  flex:1
}


})
