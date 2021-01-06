import AsyncStorage from '@react-native-async-storage/async-storage';
import { decks as initailDecks } from './_DATA'
import { DATA_STORAGE_KEY } from './keys'

// setInitialData: set initail decks for AsyncStorage
export const setInitialData = () => {
  AsyncStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(initailDecks));
  return initailDecks;
}

// getDecks: return all of the decks along with their titles, questions, and answers.
export async function getDecks() {
  try { 
    const decks = JSON.parse(await AsyncStorage.getItem(DATA_STORAGE_KEY))

    return decks
  } catch(e) {
    console.log('Error in getDecks: ', e);
  }
}

/* getDeck: take in a single argument, id(type: string), 
   and return the deck associated with that id.
   
   variable example:
    - const id = 'React'
*/
export async function getDeck(id) {
  try {
    const jsonDecks = await AsyncStorage.getItem(DATA_STORAGE_KEY)
    const decks =  jsonDecks != null ? JSON.parse(jsonDecks) : null
    const deck = decks[id]

    return deck
  } catch(e) {
    console.log('Error in getDeck: ', e)
  }
}

// saveDeckTitle: take in a single argument, title(type: string), and add it to the decks.
export async function saveDeckTitle(deckTitle) {
  try {
    const deck = {
      [deckTitle] : {
        title: deckTitle,
        questions: [],
      }
    } 
    const jsonDeck = JSON.stringify(deck)
    
    await AsyncStorage.mergeItem(DATA_STORAGE_KEY, jsonDeck)
  } catch(e) {
    console.log('Error in saveDeckTitle: ', e)
  }
}

/* addCardToDeck: take in two arguments, title(type: string) and card(type: obj), 
   and will add the card to the list of questions for the deck with the associated title.
   
   variable examples:
    - const card = {
      question: 'What is Ruby on Rails?',
      answer: 'It is a web-application framework'
    }
    - const deckTitle = 'React'
*/ 
export async function addCardToDeck({ deckTitle, card }) {
  try {
    // 1. get the specified deck and add new card into it
    const oldDeck = await getDeck(deckTitle)
    const deck = {
      [deckTitle] : {
        ...oldDeck,
        questions: oldDeck.questions.concat([ card ])
      }
    }
    const jsonDeck = JSON.stringify(deck)
    
    // 2. merge udated deck into decks
    await AsyncStorage.mergeItem(DATA_STORAGE_KEY, jsonDeck)
    const newDeck = JSON.parse(await AsyncStorage.getItem(DATA_STORAGE_KEY))
    console.log(newDeck)
  } catch(e) {
    console.log('Error in addCardToDeck: ', e)
  }
}

export function saveExampleDecks() {
  return _saveExampleDecks()
    // .then(i => console.log(i))
}

// clearAll: clear all data in AsyncStorage
export async function clearAll() {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    console.log('Error in clearAll:')
  }

  console.log('All data in AsyncStorage is clear.')
}