import { ADD_CARD_TO_GAME_DECK } from './actions'

export function addCardToGameDeck (card) {
  return { type: ADD_CARD_TO_GAME_DECK, card}
}
