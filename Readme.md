# Mobile Flashcards Project

This is the starter code for the final assessment project for Udacity's React Native course.

This application was created using create-react-native-app


### Rubric
- [x] The primary view, seen when the app loads, is a list of created decks which includes the name of each deck and the number of cards.
- [x] Pressing on a deck in the list should generate an animation, and the app should route to an individual deck view.
- [x] The individual deck view includes (at a minimum):

	- [x] The deck title
	- [x] Number of cards in the deck
	- [x] Option to start a quiz for that deck
	- [x] Option to add a new question to the deck
- [x] Pressing the 'Start a Quiz' or 'Add Card' button properly routes to the correct views for those activities.
- [x] The New Question view includes a form with fields for a question and answer, and a submit button.
Submitting the form correctly adds the question to the deck.
- [x] The Quiz view starts with a question from the selected deck.
- [x] The question is displayed, along with a button to show the answer.
- [x] Pressing the 'Show Answer' button displays the answer.
- [x] Buttons are included to allow the student to mark their guess as 'Correct' or 'Incorrect'
- [x] The view displays the number of questions remaining.
- [x] When the last question is answered, a score is displayed. This can be displayed as a percentage of correct answers or just the number of questions answered correctly.
- [x] When the score is displayed, buttons are displayed to either start the quiz over or go back to the Individual Deck view.
- [x] Both the 'Restart Quiz' and 'Back to Deck' buttons route correctly to their respective views.Earth (Orbit/Moon)
- [x] The view includes a form for creating a new deck - which should just be an input for the title and a 'Create Deck' button.
Pressing the button correctly creates the deck and routes the user to the Individual Deck view for the new deck.
- [x] Logic for notification has been implemented. Notifications are generated at a specific time if the user hasn't completed at least one quiz for that day.
- [x] Async storage is used to persist data
- [x] The app works correctly in iOS devices using Expo