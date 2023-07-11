import React from 'react';
import {View, StyleSheet, ScrollView, Pressable, Text} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/MainHeader';
import ScreenHeader from '../components/ScreenHeader';
import TopGamesCarousel from '../components/TopGamesCarousel';
import {PLACES, TOP_PLACES} from '../data';
import SectionHeader from '../components/SectionHeader';
import GamesList from '../components/GamesList';
import {
  withAuthenticator,
  useAuthenticator,
} from '@aws-amplify/ui-react-native';


const userSelector = (context) => [context.user]

const SignOutButton = () => {
  const { user, signOut } = useAuthenticator(userSelector);
  return (
    <Pressable onPress={signOut} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>
        Hello, {user.username}! Click here to sign out!
      </Text>
    </Pressable>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={{color:'black'}}>Hello</Text> */}
      <MainHeader title="Recall" />
      <ScreenHeader mainTitle="Choose" secondTitle="Game" />
      <ScrollView>
        <TopGamesCarousel list={TOP_PLACES}/>
        <SectionHeader title="Other Games" buttonTitle="See All" onPress={() => {}}/>
        <GamesList list={PLACES}/>
        {/* <SignOutButton/> */}
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