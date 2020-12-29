import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import reducer from './reducers'
import DeckList from './components/DeckList'
import NewQuestion from './components/NewQuestion';
import NewDeck from './components/NewDeck';
import Quiz from './components/Quiz';
import Deck from './components/Deck';
import { handleInitialData } from './actions';

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View>     
        <NewDeck />
        <NewQuestion />
        <DeckList />
      </View>
    </Provider>
  );
}

// class App extends React.Component {
//   componentDidMount() {
//     this.props.dispatch(handleInitialData())
//   }

//   render() {
//     return(
//       <Provider store={createStore(reducer)}>
//         <View>     
//           <NewDeck />
//           <NewQuestion />
//         </View>
//       </Provider>
//     )
//   }
// }

// export default connect()(App)