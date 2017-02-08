import { ADD_CARD_TO_GAME_DECK, SET_PLAYER_STATE } from './actions'

export function addCardToGameDeck (card) {
  return { type: ADD_CARD_TO_GAME_DECK, card }
}

export function setPlayerState (props) {
  return { type: SET_PLAYER_STATE, props }
}
