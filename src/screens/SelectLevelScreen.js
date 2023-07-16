import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"

const SelectLevelScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
       <Pressable onPress={() => {navigation.navigate('MemoryMatchLvlZero')}} style={styles.button}>
          <Text style={styles.text}>Level 1</Text>
        </Pressable>

        <Pressable onPress={() => {navigation.navigate('MemoryMatch')}} style={styles.button}>
          <Text style={styles.text}>Level 2</Text>
        </Pressable>
     
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#0F172A',
      },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'black',
        marginBottom: 10,
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
})

export default SelectLevelScreen