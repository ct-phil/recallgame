import { SafeAreaView, Text, StyleSheet, View, Pressable } from 'react-native'
import Card from '../components/Card'
import * as React from 'react'
import { useNavigation } from "@react-navigation/native"
import { DataStore } from '@aws-amplify/datastore';
import { UserScore } from '../models';
import { Auth } from 'aws-amplify';


const cards =[
  "🥕",
  "🐷",
  "🥑",
  "👻",
  "🌎",
  "🔑",
]

const MemoryMatchScreen = () => {
  const [board, setBoard] = React.useState(() => shuffle([...cards, ...cards]))
  const [selectedCards, setSelectedCards] = React.useState([]);
  const [matchedCards, setMatchedCards] = React.useState([]);
  const [score, setScore] = React.useState(0);

  const navigation = useNavigation();

  React.useEffect(() => {
    if (selectedCards.length < 2) return;

    if (board[selectedCards[0]] === board[selectedCards[1]]) {
      setMatchedCards([...matchedCards, ...selectedCards]);
      setSelectedCards([]);
    } else {
      const timeoutId = setTimeout(() => setSelectedCards([]), 1000);
      return () => clearTimeout(timeoutId);
    }

  }, [selectedCards]);

  const handleTapCard = index => {
    if (selectedCards.length >= 2 || selectedCards.includes(index)) return;
    setSelectedCards([...selectedCards, index]);
    setScore(score + 1);
  };

  const didPlayerWin = () => matchedCards.length === board.length;

  const saveScore = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      
      const newUserScore = new UserScore({
        userSub: userData.attributes.sub,
        score,
      });
  
      await DataStore.save(newUserScore);
      console.log(userData);
    } catch (error) {
      // Handle the error appropriately (e.g., logging, displaying an error message)
      console.log("Error saving score:", error);
    }
  };

  const resetGame = () => {
    setMatchedCards([]);
    setScore(0);
    setSelectedCards([]);
  };

  return (
    <SafeAreaView style={styles.container}> 
      <Text style={styles.title}>{didPlayerWin() ? "Congratulations 🎉" : "Memory Match"} </Text>
      <Text style={styles.title}>Score: {score}</Text>
      <View style={styles.board}>
      {board.map((card, index) => {
        const isTurnedOver = 
          selectedCards.includes(index) || matchedCards.includes(index);
        return(
          <Card 
            isTurnedOver={isTurnedOver}
            onPress={() => handleTapCard(index)}
            key={index}
            > {card}
          </Card>
        )
      })}
      </View>
      
        <Pressable onPress={resetGame} style={styles.button}>
          <Text style={styles.text}>New Game</Text>
        </Pressable>

        <Pressable onPress={() => {navigation.navigate('Home')}} style={styles.button}>
          <Text style={styles.text}>Quit</Text>
        </Pressable>
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#0F172A',
  },
  board: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    color: 'white', 
    fontWeight: '900',   
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
 

});

/**
 * Returns the array shuffled into a random order.
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the elements at i and randomIndex
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

export default MemoryMatchScreen;