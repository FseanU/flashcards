import React from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { addCardToDeck } from '../utils/api'

class NewQuestion extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  handleInputChange = (input, name) => {
    switch (name) {
      case 'question' :
        this.setState({question: input})
        break
      case 'answer' :
        this.setState({answer: input})
        break
      default :
        console.log('please add a name to input field')
    }    
  }

  onPress = () => {
    const { question, answer } = this.state
    // todo: Update store
    // todo: Update localstorage
    const deck = {
      card: this.state,
      deckTitle: '',
    }
    addCardToDeck(deck)
  
    this.setState({
      question: '',
      answer: '',
    })
    
    // todo: Navigate to Deck view
    
  }

  render() {
    const questionValue = this.state.question
    const answerValue = this.state.answer
    
    return (
      <View>
        <Text>New Question</Text>
        <TextInput 
          onChangeText={input => this.handleInputChange(input, 'question')}
          value={questionValue}
          placeholder='Please enter your question'
        />
        <TextInput 
          onChangeText={input => this.handleInputChange(input, 'answer')}
          value={answerValue}
          placeholder='Please enter your answer'
        />
        <Button 
          title="Create Question"
          onPress={this.onPress}
        />
      </View>
    )
  }
}

export default NewQuestion