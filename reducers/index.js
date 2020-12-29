import { RECEIVE_DECKS, ADD_DECK } from '../actions'
import { decks as initialState } from '../utils/_DATA'

function decks (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK :
      return {
        ...state,
        ...action.deck
      }
    default :
      return state
  }
}

export default decks