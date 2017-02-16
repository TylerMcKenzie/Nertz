import { ADD_CARD_TO_GAME_DECK, SET_INITIAL_PLAYER_STATE, SET_SELECTED_CARD, UN_SET_SELECTED_CARD, DRAW_CARDS, PLAY_ON_HAND, FLIP_DECK, PLAY_ON_GAME } from './actions'

export function addCardToGameDeck (card) {
  return { type: ADD_CARD_TO_GAME_DECK, card }
}

export function setInitialPlayerState (props) {
  return { type: SET_INITIAL_PLAYER_STATE, props }
}

export function setSelectedCard (card) {
  return { type: SET_SELECTED_CARD, card }
}

export function unSetSelectedCard () {
  return { type: UN_SET_SELECTED_CARD }
}

export function drawCards () {
  return { type: DRAW_CARDS }
}

export function playerMoveOnHand (card, destKey) {
  return { type: PLAY_ON_HAND, card, destKey }
}

export function playerMoveOnGame (card) {
  return { type: PLAY_ON_GAME, card }
}

export function flipDeck () {
  return { type: FLIP_DECK }
}
