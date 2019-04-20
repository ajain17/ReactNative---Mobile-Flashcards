import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput
} from "react-native";
import { connect } from "react-redux";
import { addDeck } from "../actions";
import SubmitBtn from "./SubmitButton";
class AddDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  render() {
    const { title } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <Text style={styles.label}>Name your deck</Text>
        <TextInput
          value={title}
          style={styles.input}
          onChangeText={this.handleTextChange}
        />
        <SubmitBtn
          onPress={this.submit}
          disabled={this.state.title.length === 0}
        />
      </KeyboardAvoidingView>
    );
  }

  handleTextChange = title => {
    this.setState({ title });
  };

  submit = () => {
    debugger;
    this.props.dispatch(addDeck(this.state.title));
    // Navigate to home
    // Save to "DB"
  };
}
function mapStateToProps(state) {
  return {
    decks: state.decks
  };
}

export default connect(mapStateToProps)(AddDeck);

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
