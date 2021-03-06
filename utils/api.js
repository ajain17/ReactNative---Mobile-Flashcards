import { AsyncStorage } from "react-native";
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
    let deck = JSON.parse(data)[title];
    deck.questions.push(card);
    AsyncStorage.mergeItem(DECKSTORAGEKEY, JSON.stringify({ [title]: deck }));
  });
}

export function setDummyData() {
  AsyncStorage.setItem(DECKSTORAGEKEY, JSON.stringify(dummyData));
}

const dummyData = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event"
      }
    ]
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared."
      }
    ]
  }
};
