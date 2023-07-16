import { View, Text, Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TabNavigator from './TabNavigator';
import CustomDrawer from '../components/CustomDrawer';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
      drawerContent={props => <CustomDrawer {...props} />} 
      screenOptions={{
        headerShown: false, 
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,       
        }

      }}>
      <Drawer.Screen 
        name="Landing" component={TabNavigator} 
        options={{ title: 'Home',
        drawerIcon: () => (
          <Image 
            source={require('../../assets/icons/Home.png')} 
            style={{height: 40, width: 40,}}
          />
        )
      }}
      />
      <Drawer.Screen 
        name="Profile" component={ProfileScreen}
        options={{ title: 'Profile',
        drawerIcon: () => (
          <Image 
            source={require('../../assets/icons/Home.png')} 
            style={{height: 40, width: 40,}}
          />
        )
      }}
       />
    
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;