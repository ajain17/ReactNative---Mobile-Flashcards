import { AsyncStorage } from "react-native";
import setDummyData from "./_data";

export const DECKSTORAGEKEY = "FlashCards:decks";

export function getDecks() {
  return AsyncStorage.getItem(DECKSTORAGEKEY).then(data => {
    if (data) {
      return JSON.parse(data);
    } else {
      return JSON.parse(setDummyData());
    }
  });
}

export function deleteAllDecks() {
  return AsyncStorage.clear();
}

export function deleteDeck(title) {
  return AsyncStorage.getItem(DECKSTORAGEKEY).then(results => {
    const data = JSON.parse(results);
    data[title] = undefined;
    delete data[title];
    AsyncStorage.setItem(DECKSTORAGEKEY, JSON.stringify(data));
  });
}

export function getDeck(id) {
  return AsyncStorage.getItem(DECKSTORAGEKEY).then(
    data => JSON.parse(data)[id]
  );
}

export function saveDeckTitle(title) {
  let deck = {
    title,
    questions: []
  };

  return AsyncStorage.mergeItem(
    DECKSTORAGEKEY,
    JSON.stringify({
      [title]: deck
    })
  );
}

export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(DECKSTORAGEKEY).then(data => {
    // let decks = JSON.parse(data);
    // let deck = decks[title];
    // if (deck) {
    //   deck.questions.push(card);
    //   AsyncStorage.setItem(DECKSTORAGEKEY, JSON.stringify(decks));
    // }
    let deck = JSON.parse(data)[title];
    deck.questions.push(card);
    AsyncStorage.mergeItem(DECKSTORAGEKEY, JSON.stringify({ [title]: deck }));
  });
}
