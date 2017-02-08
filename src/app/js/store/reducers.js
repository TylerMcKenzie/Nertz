import { ADD_CARD_TO_GAME_DECK } from './actions'

const DEFAULT_STATE = {
  gameState: {
    round: [],
    playerScores: {},
    gameDeck: []
  },
  playerState: {
    deck: [],
    hand: {
      nertzPile: [],
      playingCards: [],
      deckDraw: []
    }
  }
}

const addCardToGameDeck = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {gameState: { gameDeck: state.gameState.gameDeck.push(action.card)}})
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
