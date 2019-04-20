import { ADD_CARD, ADD_DECK, UPDATE_DECK } from "../actions";
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

    default:
      return state;
  }
}

export default decks;
