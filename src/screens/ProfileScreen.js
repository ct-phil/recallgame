import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { DataStore } from '@aws-amplify/datastore';
import { UserDetails } from '../models';
import { Auth } from 'aws-amplify';
import MainHeader from '../components/MainHeader';
import {useState, useEffect} from 'react';
import { ScrollView } from 'react-native-gesture-handler';



const ProfileScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState(0);
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState(0);

  const editProfile = async () => { 
    try {
      const userData = await Auth.currentAuthenticatedUser();

      const myUserDetails = await DataStore.query(UserDetails, (c) => c.userSub.eq(userData.attributes.sub));

      if(myUserDetails.length > 0 ){
        const updatedUserDetails = await DataStore.save(
          UserDetails.copyOf(myUserDetails[0], updated => {
            updated.firstName = firstName;
            updated.lastName = lastName;
            updated.DOB = dob;
            updated.gender = gender;
            updated.phoneNumber = phone;

          })
        );
        
      } else {
        const newUserDetails = new UserDetails({
          userSub: userData.attributes.sub,
          firstName,
          lastName,
          dob,
          gender, 
          phone,
        });

        await DataStore.save(newUserDetails);
      }

    } catch (error) {
      console.log("Error saving score:", error);
    }

  }

  return (
    <View style={styles.container}>
      <MainHeader title="Edit Profile" />
      <ScrollView style={{marginBottom: 20,}}>
      <View style={{flex: 1, paddingHorizontal: 22,}}>
        <View style={styles.profileImage}>
          <Image source={require('../../assets/images/banner-memory-1.jpg')} style={styles.image}/>
        </View>
        <View style={{flexDirection: 'column', marginBottom: 6,}}>
            <Text style={styles.label}>First Name</Text>
            <View style={styles.input}>
              <TextInput
                value={firstName}
                onChangeText={(value) => setFirstName(value)}
                editable={true}
                style={{color: 'black'}}
              />
            </View>
        </View>
        <View style={{flexDirection: 'column', marginBottom: 6,}}>
            <Text style={styles.label}>Last Name</Text>
            <View style={styles.input}>
              <TextInput
                value={lastName}
                onChangeText={(value) => setLastName(value)}
                editable={true}
                style={{color: 'black'}}
              />
            </View>
          </View>
          <View style={{flexDirection: 'column', marginBottom: 6,}}>
            <Text style={styles.label}>Date of Birth</Text>
            <View style={styles.input}>
              <TextInput
                value={dob}
                onChangeText={(value) => setDob(value)}
                editable={true}
                style={{color: 'black'}}
              />
            </View>
        </View>
        <View style={{flexDirection: 'column', marginBottom: 6,}}>
            <Text style={styles.label}>Gender</Text>
            <View style={styles.input}>
              <TextInput
                value={gender}
                onChangeText={(value) => setGender(value)}
                editable={true}
                style={{color: 'black'}}
              />
            </View>
        </View>
        <View style={{flexDirection: 'column', marginBottom: 6,}}>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.input}>
              <TextInput
                value={phone}
                onChangeText={(value) => setPhone(value)}
                editable={true}
                style={{color: 'black'}}
              />
            </View>
        </View>
        <TouchableOpacity
          onPress={editProfile}
           
          style={{
            backgroundColor: 'black',
            height: 44,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,

          }}
        >
          <Text
            style={{
              color: 'white',
            }}
          >
            Save Changes
          </Text>
        </TouchableOpacity>
        </View>
        </ScrollView>

      </View>
      
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
  label: {
    color: "black",
    fontSize: 18,
  },
  input: {
    height: 44,
    width: "100%",
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 6,
    justifyContent: "center",
    paddingLeft: 8,
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  profileImage: {
    alignSelf: 'center',
    marginVertical: 40,
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    marginTop: 40,
  },
})

export default ProfileScreen