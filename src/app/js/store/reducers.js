import { ADD_CARD_TO_GAME_DECK } from './actions'

const DEFAULT_STATE = {
  gameDeck: []
}

const addCardToGameDeck = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {gameDeck: [action.card]})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_CARD_TO_GAME_DECK:
      return addCardToGameDeck(state, action)
    default:
      return state
  }
}

export default rootReducer
