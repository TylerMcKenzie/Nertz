import { SET_INITIAL_PLAYER_STATE, SET_SELECTED_CARD, UN_SET_SELECTED_CARD, DRAW_CARDS, FLIP_DECK, PLAY_ON_HAND,  PLAY_ON_GAME } from './actions'

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

export function flipDeck () {
  return { type: FLIP_DECK }
}

export function playOnHand (cardLocation, cardDest, cardToPlay) {
  return { type: PLAY_ON_HAND, cardLocation, cardDest, cardToPlay }
}

export function playOnGame (cardLocation, cardDest, cardToPlay) {
  return { type: PLAY_ON_GAME, cardLocation, cardDest, cardToPlay }
}
