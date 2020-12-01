import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import DeckList from './components/DeckList'
import NewQuestion from './components/NewQuestion';
import NewDeck from './components/NewDeck';
import Quiz from './components/Quiz';
import Deck from './components/Deck';

export default function App() {
  return (
    <View>
      <DeckList />
      <NewQuestion />
      <NewDeck />
      <Quiz />
      <Deck />
    </View>
  );
}
