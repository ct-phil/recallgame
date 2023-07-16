import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import {useState, useEffect} from 'react';
import { Auth } from 'aws-amplify';

const userSelector = (context) => [context.user]

const CustomDrawer = props => {
    const { user, signOut } = useAuthenticator(userSelector);

    const [email, setEmail] = useState('');

    useEffect(() => {
        const fetchUserEmail = async () => {
          try {
            const user = await Auth.currentAuthenticatedUser();
            const userEmail = user.attributes.email;
            setEmail(userEmail);
          } catch (error) {
            console.log('Error fetching user email:', error);
          }
        };
    
        fetchUserEmail();
      }, []);
  return (
    <View style={{flex: 1,}}>
        <DrawerContentScrollView contentContainerStyle={{backgroundColor: '#8200d6',}}>
            <ImageBackground 
                source={require('../../assets/images/banner-memory-1.jpg')} style={{padding: 20, height: 250, }}>
                <Image 
                    source={require('../../assets/images/banner-memory-1.jpg')} 
                    style={{height: 80, width: 80, borderRadius: 40, marginTop: 100}}
                />
                <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium',}}>{email}</Text>    
            </ImageBackground>
            <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
            <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
        <View style={{padding: 10, borderTopWidth: 1, borderTopColor: '#ccc',}}>
            <TouchableOpacity onPress={signOut}>
                <View style={{flexDirection: 'row', alignItems: 'center',}}>
                <Image 
                    source={require('../../assets/icons/Home.png')} 
                    style={{height: 40, width: 40,}}
                />
                    <Text style={{color: 'black', fontFamily: 'Roboto-medium', fontSize: 15, marginLeft: 5,}}>Sign Out</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CustomDrawer