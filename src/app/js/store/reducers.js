import { ADD_CARD_TO_GAME_DECK, SET_INITIAL_PLAYER_STATE, SET_SELECTED_CARD, UN_SET_SELECTED_CARD, DRAW_CARDS, FLIP_DECK, PLAY_ON_HAND, PLAY_ON_GAME } from './actions'
import { addItem, addItems, removeItem, removeItems } from '../utils/immutables'

const DEFAULT_STATE = {
  gameState: {
    round: [],
    playerScores: [],
    gameDeck: []
  },
  playerState: {
    deck: [],
    hand: {
      nertzPile: [],
      playingCards: {
        pile1: [],
        pile2: [],
        pile3: [],
        pile4: []
      },
      deckDraw: []
    },
    selectedCard: {}
  }
}

const addCardToGameDeck = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    gameState: {
      gameDeck: state.gameState.gameDeck.push(action.card)
    }
  })
  return newState
}

const setInitialPlayerState = (state, action) => {
  const newPlayerState = {}
  Object.assign(newPlayerState, state.playerState, {
    deck: action.props.deck,
    hand: {
      nertzPile: action.props.hand.nertzPile,
      playingCards: action.props.hand.playingCards,
      deckDraw: action.props.hand.deckDraw
    }
  })
  const newState = {}
  Object.assign(newState, state, {
    playerState: newPlayerState
  })
  return newState
}

const setSelectedCard = (state, action) => {
  const newPlayerState = {}
  Object.assign(newPlayerState, state.playerState, {
    selectedCard: action.card
  })
  const newState = {}
  Object.assign(newState, state, {
    playerState: newPlayerState
  })
  return newState
}

const unSetSelectedCard = (state, action) => {
  const newPlayerState = {}
  Object.assign(newPlayerState, state.playerState, {
    selectedCard: {}
  })
  const newState = {}
  Object.assign(newState, state, {
    playerState: newPlayerState
  })
  return newState
}

const drawCards = (state, action) => {
  const newPlayerHandState = {}
  Object.assign(newPlayerHandState, state.playerState.hand, {
    deckDraw: addItems(state.playerState.hand.deckDraw,
      state.playerState.deck.slice(state.playerState.deck.length-3, state.playerState.deck.length))
  })
  const newPlayerState = {}
  Object.assign(newPlayerState, state.playerState, {
    deck: removeItems(state.playerState.deck, state.playerState.deck.length-3, state.playerState.deck.length),
    hand: newPlayerHandState
  })
  const newState = {}
  Object.assign(newState, state, {
    playerState: newPlayerState
  })
  return newState
}

const flipDeck = (state, action) => {
  const newPlayerHandState = {}
  Object.assign(newPlayerHandState, state.playerState.hand, {
    deckDraw: []
  })
  const newPlayerState = {}
  Object.assign(newPlayerState, state.playerState, {
    deck: [...state.playerState.hand.deckDraw],
    hand: newPlayerHandState
  })
  const newState = {}
  Object.assign(newState, state, {
    playerState: newPlayerState
  })
  return newState
}

const playOnHand = (state, action) => {
  
  return state
}

const playOnGame = (state, action) => {

}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_INITIAL_PLAYER_STATE:
      return setInitialPlayerState(state, action)
    case SET_SELECTED_CARD:
      return setSelectedCard(state, action)
    case UN_SET_SELECTED_CARD:
      return unSetSelectedCard(state, action)
    case ADD_CARD_TO_GAME_DECK:
      return addCardToGameDeck(state, action)
    case DRAW_CARDS:
      return drawCards(state, action)
    case FLIP_DECK:
      return flipDeck(state, action)
    case PLAY_ON_HAND:
      return playOnHand(state, action)
    case PLAY_ON_GAME:
      return playOnGame(state, action)
    default:
      return state
  }
}

export default rootReducer
