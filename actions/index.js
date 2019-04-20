export const ADD_CARD = "ADD_CARD";
export const ADD_DECK = "ADD_DECK";
export const UPDATE_DECK = "UPDATE_DECK";

export function addCard(title, card) {
  return {
    type: ADD_CARD,
    title,
    card
  };
}

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title
  };
}

export function updateDeck(deck) {
  return {
    type: UPDATE_DECK,
    deck
  };
}
