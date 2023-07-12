import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {sizes, spacing} from '../constants/theme';

const ScreenHeader = ({mainTitle, secondTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{mainTitle}</Text>
      <Text style={styles.secondTitle}>{secondTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.l,
    paddingVertical: spacing.l,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  secondTitle: {
    fontSize: 20,
    color: 'black',
  },
});

export default ScreenHeader;