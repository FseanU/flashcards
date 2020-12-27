import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, TextInput } from 'react-native'
import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'

class NewDeck extends React.Component {
  state = {
    value: ''
  }

  onChangeText = (input) => (
    this.setState({
      value: input
    })
  )

  onPress = () => {
    const { dispatch } = this.props
    const { value } = this.state
  
    dispatch(addDeck({
      [value]: {
        title: value
      }}))

    // Update localstorage
    saveDeckTitle(value)

    this.setState({
      value: ''
    })

    // todo: Navigate to Deck view

  }

  render() {
    const value = this.state.value

    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput 
          onChangeText={input => this.onChangeText(input)}
          value={value}
        />
        <Button 
          title="Create Deck"
          onPress={this.onPress}
        />
      </View>
    )
  }
}


export default connect()(NewDeck)