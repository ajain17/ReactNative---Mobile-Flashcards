import React from "react";
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput
} from "react-native";
import { connect } from "react-redux";
import { addCard } from "../actions";
import { addCardToDeck } from "../utils/api";
import SubmitBtn from "./SubmitButton";
class AddCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      question: "",
      answer: ""
    };
  }

  componentDidMount() {
    this.setState({ title: this.props.navigation.state.params.title });
  }

  render() {
    const { question, answer } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <Text style={styles.label}>Question</Text>
        <TextInput
          value={question}
          style={styles.input}
          onChangeText={question => this.setState({ question })}
        />
        <Text style={styles.label}>Answer</Text>
        <TextInput
          value={answer}
          style={styles.input}
          onChangeText={answer => this.setState({ answer })}
        />
        <SubmitBtn
          onPress={this.submit}
          disabled={question.trim().length <= 0 || answer.trim().length <= 0}
        />
      </KeyboardAvoidingView>
    );
  }

  submit = () => {
    const { question, answer, title } = this.state;
    let card = { question, answer };
    this.props.dispatch(addCard(title, card));
    this.setState({ question: "", answer: "" });
    addCardToDeck(title, card);
    this.toDeckDetailsView(title);
  };

  toDeckDetailsView = title => {
    this.props.navigation.navigate("DeckDetailsView", {
      title
    });
  };
}

export default connect()(AddCard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25
  },
  label: {
    textAlign: "center",
    marginTop: 20,
    justifyContent: "center",
    fontSize: 20
  },
  input: {
    marginTop: 20,
    height: 40,
    borderColor: "gray",
    borderWidth: 2
  }
});
