import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import TabNavigator from './TabNavigator';
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
        <Stack.Navigator>
            <Stack.Screen 
                name="Root" 
                component={TabNavigator}
                options={{headerShown: false,}} />
        </Stack.Navigator>     
    </NavigationContainer>
  )
}

export default MainNavigator