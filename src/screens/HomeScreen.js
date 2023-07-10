import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/MainHeader';
import ScreenHeader from '../components/ScreenHeader';
import TopGamesCarousel from '../components/TopGamesCarousel';
import {PLACES, TOP_PLACES} from '../data';
import SectionHeader from '../components/SectionHeader';
import GamesList from '../components/GamesList';


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
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});


export default HomeScreen