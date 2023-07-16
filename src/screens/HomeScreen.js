import React from 'react';
import {View, StyleSheet, ScrollView, Pressable, Text, TouchableOpacity} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/MainHeader';
import ScreenHeader from '../components/ScreenHeader';
import TopGamesCarousel from '../components/TopGamesCarousel';
import {GAMES, TOP_GAMES} from '../data';
import SectionHeader from '../components/SectionHeader';
import GamesList from '../components/GamesList';
import {
  withAuthenticator,
  useAuthenticator,
} from '@aws-amplify/ui-react-native';
import {useState, useEffect} from 'react';
import { Auth } from 'aws-amplify';


const userSelector = (context) => [context.user]

const SignOutButton = () => {
  const { user, signOut } = useAuthenticator(userSelector);
  return (
      <TouchableOpacity onPress={signOut} style={{ height: 40, marginTop: 10, width: 80, alignItems: 'center', borderRadius: 10, justifyContent: 'center', backgroundColor: '#68BBE3'}}>
        <Text style={{color: 'black',}}>Sign Out</Text>
      </TouchableOpacity>
  );
};

const HomeScreen = () => {

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
    <View style={styles.container}>
      {/* <Text style={{color:'black'}}>Hello</Text> */}
      <MainHeader title="Recall" />
      <ScreenHeader mainTitle={`Hello, ${email.split('@')[0]}`} secondTitle="Select a game" />
      <ScrollView>
        <TopGamesCarousel list={TOP_GAMES}/>
        <SectionHeader title="Other Games" buttonTitle="See All" onPress={() => {}}/>
        <GamesList list={GAMES}/>
        <View style={{alignItems: 'center', justifyContent: 'center',}}>
          {/* <SignOutButton /> */}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 8,
  },
  buttonText: {color: 'white', padding: 16, fontSize: 18},
});


export default HomeScreen