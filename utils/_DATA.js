import AsyncStorage from '@react-native-async-storage/async-storage';

export let decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

// export function _getDecks() {
//   return new Promise((res, rej) => {
//     setTimeout(() => res({...decks}), 1000)
//   })
// }

// export function _saveExampleDecks() {
//   const deckNames = Object.keys(decks)
//   deckNames.map(async(deckName) => {
//     try {
//       const jsonValue = JSON.stringify(decks[deckName])
//       await AsyncStorage.setItem(deckName, jsonValue)
//     } catch(e) {
//       console.log(e)
//     }
//   })
// }