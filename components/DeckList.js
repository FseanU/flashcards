import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { saveExampleDecks, getDecks, setInitialData, saveDeckTitle, addCardToDeck, getDeck, clearAll } from '../utils/api'

class DeckList extends React.Component {
  onPress = () => {
    // todo: Redirect to Deck
  }

  async componentDidMount() {
    console.log('decklist mounted')
  
    // set initial data for AsyncStorage 
    getDecks().then(decks => decks ? null : setInitialData()) 
    getDecks().then(decks => console.log(decks))
  }

  render() {
    const { decks } = this.props
    return (
      <View>
        {Object.keys(decks).map(deckname => (
          <View key={deckname}>
            <TouchableOpacity
              onPress={this.onPress}
            >
              <Text>{deckname}</Text>
              <Text>{decks[deckname].questions ? decks[deckname].questions.length : ''}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  decks: state
})

export default connect(mapStateToProps)(DeckList)