import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcome from './src/Screen/Welcome'
import Login from './src/Screen/Login'
import SignUp from './src/Screen/SignUp'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack= createNativeStackNavigator();

const App = () => {
  return (
    
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={Welcome}
        options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login}
        />
        <Stack.Screen name='SignUp' component={SignUp}
       />
      </Stack.Navigator>
    </NavigationContainer>
    
    
  
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000'
  }
  
})