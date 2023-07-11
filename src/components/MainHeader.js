import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from './Icon';
import {sizes, spacing} from '../constants/theme';
import { useNavigation } from "@react-navigation/native"

const MainHeader = ({title}) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {marginTop: insets.top}]}>
      <Icon icon="Hamburger" onPress={() => {navigation.openDrawer();}} />
      <Text style={styles.title}>{title}</Text>
      <Icon icon="Notification" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.l,
    paddingTop: 20,
  },
  title: {
    color: 'black',
    fontSize: sizes.h3,
    fontWeight: 'bold',
  },
});

export default MainHeader;