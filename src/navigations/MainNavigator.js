import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import TabNavigator from './TabNavigator';
import { StatusBar } from "react-native";
import MemoryMatchScreen from '../screens/MemoryMatchScreen';
import DrawerNavigator from './DrawerNavigator';
import SelectLevelScreen from '../screens/SelectLevelScreen';
import MemoryMatchScreenLvlZero from '../screens/MemoryMatchScreenLvlZero';



const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>      
      <StatusBar hidden />
        <Stack.Navigator>
            <Stack.Screen 
              name="Root" 
              component={DrawerNavigator}
              options={{headerShown: false,}} 
            />
            <Stack.Screen 
              name="MemoryMatch" 
              component={MemoryMatchScreen}
              options={{headerShown: false,}} 
            />
            <Stack.Screen 
              name="MemoryMatchLvlZero" 
              component={MemoryMatchScreenLvlZero}
              options={{headerShown: false,}} 
            />
             <Stack.Screen 
              name="SelectLevel" 
              component={SelectLevelScreen}
              options={{headerShown: false,}} 
            />
        </Stack.Navigator>     
    </NavigationContainer>
  )
}

export default MainNavigator