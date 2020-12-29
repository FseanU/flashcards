import AsyncStorage from '@react-native-async-storage/async-storage';
// import { _saveExampleDecks } from './_DATA'

// getDecks: return all of the decks along with their titles, questions, and answers.
export async function getDecks() {
  let keys = []
  let decks
  try { 
    keys = await AsyncStorage.getAllKeys()
    decks = await AsyncStorage.multiGet(keys)
    return decks
  } catch(e) {
    console.log(e);
  }
}

// getDeck: take in a single id argument and return the deck associated with that id.
export async function getDeck(key) {
  try {
    const jsonDeck = await AsyncStorage.getItem(key)
    return jsonDeck != null ? JSON.parse(jsonDeck) : null
  } catch(e) {
    console.log(e)
  }
}

// saveDeckTitle: take in a single title argument and add it to the decks.
export async function saveDeckTitle(deckTitle) {
  try {
    const deck = {
      title: deckTitle,
      questions: [],
    }
    const jsonDeck = JSON.stringify(deck)
    
    await AsyncStorage.setItem(deckTitle, jsonDeck)
  } catch(e) {
    console.log(e)
  }
}

/* addCardToDeck: take in two arguments, title and card, 
   and will add the card to the list of questions for the deck with the associated title.*/ 
export async function addCardToDeck({deckTitle, card}) {
  try {
    // 1. get the deck cards 
    const deck = await AsyncStorage.getItem(deckTitle)
    const objDeck = JSON.parse(deck)
    const newCards = objDeck.questions.concat([card])
    const newDeck = {
      ...objDeck,
      questions: newCards,
    }
    const jsonDeck = JSON.stringify(newDeck)

    // 2. update deck value
    await AsyncStorage.setItem(deckTitle, jsonDeck)
  } catch(e) {
    console.log(e)
  }
}

// export function getInitialData() {
//   return _saveExampleDecks()
//     .then(i => console.log(i))
// }