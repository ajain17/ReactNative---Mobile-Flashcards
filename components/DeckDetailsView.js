import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import TextButton from "./TextButton";
class DeckDetailsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  componentDidMount() {
    this.setState({ title: this.props.navigation.state.params.title });
  }

  render() {
    let deck = this.props.deck;
    return deck ? (
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{this.state.title}</Text>
        <Text style={styles.cardsLength}>
          {deck && deck.questions && deck.questions.length} card(s)
        </Text>
        <TextButton style={styles.button} onPress={this.startAQuiz}>
          Start a quiz
        </TextButton>
        <TextButton style={styles.button} onPress={this.addANewQuestion}>
          Add a new question
        </TextButton>
      </View>
    ) : (
      <></>
    );
  }

  startAQuiz = () => {
    let title = this.props.deck.title;
    this.props.navigation.navigate("StartAQuiz", {
      title
    });
  };

  addANewQuestion = () => {
    let title = this.props.deck.title;
    this.props.navigation.navigate("AddCard", {
      title
    });
  };
}

function mapStateToProps(state, ownProps) {
  let currentDeck;
  if (state) {
    currentDeck = state[ownProps.navigation.state.params.title];
  }
  return {
    deck: currentDeck
  };
}

export default connect(mapStateToProps)(DeckDetailsView);

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginTop: 20,
    justifyContent: "center",
    fontSize: 25
  },
  cardsLength: {
    textAlign: "center",
    marginTop: 40,
    justifyContent: "center",
    fontSize: 20
  },
  button: {
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
    alignSelf: "center",
    height: 50,
    fontSize: 20,
    width: 200,
    marginTop: 20,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "purple",
    borderColor: "black",
    borderWidth: 2
  }
});
