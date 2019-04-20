import React from "react";
import { Text, View, StyleSheet } from "react-native";
import TextButton from "./TextButton";
import { connect } from "react-redux";
import { QuestionView, AnswerView, EmptyQuizView } from "./QuizViews";
import { updateDeck } from "../actions";
const deepcopy = require("deepcopy");
class StartAQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      index: 0,
      showAnswer: false,
      totalScore: 0
    };
  }
  componentDidMount() {
    this.setState({ title: this.props.navigation.state.params.title });
  }

  render() {
    if (this.props.deck.questions.length === 0) {
      return <EmptyQuizView />;
    } else {
      let question = this.props.deck.questions[this.state.index];
      if (question) {
        return (
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{this.state.title}</Text>
            <View>
              {!this.state.showAnswer ? (
                <QuestionView
                  question={question.question}
                  showAnswer={() => this.setState({ showAnswer: true })}
                />
              ) : (
                <AnswerView
                  question={question}
                  hideAnswer={() => this.setState({ showAnswer: false })}
                />
              )}
              <TextButton
                style={[styles.options]}
                onPress={() => this.incrementScore(1)}
              >
                Correct
              </TextButton>

              <TextButton
                style={[styles.options]}
                onPress={() => this.incrementScore(0)}
              >
                Incorrect
              </TextButton>

              <Text>
                Remaining Questions:
                {this.props.deck.questions.length - this.state.index - 1}/
                {this.props.deck.questions.length}
              </Text>
            </View>
          </View>
        );
      }
    }
  }

  incrementScore = value => {
    let newScore = this.state.totalScore + value;
    this.setState({ totalScore: newScore }, () => this.incrementIndex());
  };

  showAnswer = () => {
    this.setState({ showAnswer: true });
  };

  hideAnswer = () => {
    this.setState({ showAnswer: false });
  };

  incrementIndex = () => {
    if (this.state.index + 1 === this.props.deck.questions.length) {
      let { title, totalScore } = this.state;
      //reset score and index
      this.setState({ totalScore: 0, index: 0 });
      this.props.navigation.navigate("QuizResults", {
        title,
        totalScore
      });
    } else {
      this.setState(state => {
        let newIndex = state.index + 1;
        return {
          ...state,
          index: newIndex
        };
      });
    }
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

export default connect(mapStateToProps)(StartAQuiz);

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginTop: 20,
    justifyContent: "center",
    fontSize: 25
  },
  footer: {
    textAlign: "right",
    marginTop: 30,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "purple"
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
