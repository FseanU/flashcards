import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import DeckList from './components/DeckList'
import NewQuestion from './components/NewQuestion';
import NewDeck from './components/NewDeck';
import Quiz from './components/Quiz';
import Deck from './components/Deck';

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View>
        <DeckList />
        <NewQuestion />
        <NewDeck />
        <Quiz />
        <Deck />
      </View>
    </Provider>
  );
}
