import React from "react";
import { Text, View, StyleSheet } from "react-native";
import TextButton from "./TextButton";
import { connect } from "react-redux";

class QuizResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      totalScore: 0
    };
  }
  componentDidMount() {
    this.setState({
      title: this.props.navigation.state.params.title,
      totalScore: this.props.navigation.state.params.totalScore
    });
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>{this.state.title}</Text>

        <Text style={styles.title}>
          You answered {this.state.totalScore} questions correctly
        </Text>
        <TextButton style={[styles.options]} onPress={this.restartQuiz}>
          Restart Quiz
        </TextButton>
        <TextButton style={[styles.options]} onPress={this.backToDeck}>
          Back To Deck
        </TextButton>
      </View>
    );
  }

  restartQuiz = () => {
    let title = this.state.title;
    this.props.navigation.navigate("StartAQuiz", {
      title
    });
  };

  backToDeck = () => {
    let title = this.state.title;
    this.props.navigation.navigate("DeckDetailsView", {
      title
    });
  };
}

export default QuizResults;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginTop: 20,
    justifyContent: "center",
    fontSize: 25
  },
  options: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    padding: 2,
    textAlign: "center",
    height: 40,
    fontSize: 14,
    marginTop: 20,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "purple",
    borderColor: "black",
    borderWidth: 2
  }
});
