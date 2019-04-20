import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TextButton from "./TextButton";

export function AnswerView({ question, hideAnswer }) {
  return (
    <View>
      <Text style={styles.title}>Question: {question.question}</Text>
      <TextButton style={styles.button} onPress={hideAnswer}>
        Hide Answer
      </TextButton>
      <Text style={styles.title}>Answer: {question.answer}</Text>
    </View>
  );
}

export function QuestionView({ question, showAnswer }) {
  return (
    <View>
      <Text style={styles.title}>Question: {question}</Text>
      <TextButton style={styles.button} onPress={showAnswer}>
        Show Answer
      </TextButton>
    </View>
  );
}

export function EmptyQuizView() {
  return (
    <Text>Please add some cards to the deck in order to take the quiz</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginTop: 20,
    justifyContent: "center",
    fontSize: 25
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
