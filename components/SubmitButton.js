import React from "react";
import { Platform, StyleSheet, Text, TouchableOpacity } from "react-native";
import { purple, white } from "../utils/colors";
function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={[
        Platform.OS === "ios" ? styles.iosSubmitBtn : styles.androidSubmitbtn,
        styles.button
      ]}
      onPress={onPress}
    >
      <Text style={styles.submitBtnText}>Submit</Text>
    </TouchableOpacity>
  );
}

export default SubmitBtn;

const styles = StyleSheet.create({
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  androidSubmitbtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center"
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  button: {
    marginTop: 20
  }
});
