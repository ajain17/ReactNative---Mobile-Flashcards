import { ADD_CARD, ADD_DECK, UPDATE_DECK, RECEIVE_DECKS } from "../actions";

const deepcopy = require("deepcopy");
function decks(state = {}, action) {
  let decks;
  switch (action.type) {
    case ADD_DECK:
      let newDeck = {
        [action.title]: {
          title: action.title,
          questions: []
        }
      };

      console.log(...state, newDeck);
      return {
        ...state,
        newDeck
      };
    case ADD_CARD:
      decks = deepcopy(state);
      decks[action.title].questions.push(action.card);
      return {
        ...decks
      };

    case UPDATE_DECK:
      decks = deepcopy(state);
      decks[action.deck.title] = action.deck;
      return {
        ...decks
      };
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    default:
      return state;
  }
}

export default decks;
