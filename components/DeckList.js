import React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { getDecks } from "../utils/api";
import { receiveDecks } from "../actions";
class DeckList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    getDecks().then(decks => {
      this.props.dispatch(receiveDecks(decks));
    });
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.title}>Decks</Text>
        {this.props.decks && Object.keys(this.props.decks).length > 0 ? (
          <View>
            {Object.keys(this.props.decks).map(deck => (
              <View>
                <TouchableOpacity
                  style={styles.deck}
                  key={deck}
                  onPress={() => {
                    this.props.navigation.navigate("DeckDetailsView", {
                      title: deck
                    });
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 25,
                      fontWeight: "bold"
                    }}
                  >
                    Deck {deck} has {this.props.decks[deck].questions.length}{" "}
                    card(s)
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ) : (
          <View>
            <Text style={styles.title}>No decks</Text>
          </View>
        )}
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state
  };
}

export default connect(mapStateToProps)(DeckList);

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginTop: 20,
    justifyContent: "center",
    fontSize: 25
  },
  deck: {
    alignItems: "center",
    height: 100,
    padding: 20,
    marginTop: 10,
    justifyContent: "center",
    backgroundColor: "mediumpurple",
    borderColor: "black",
    borderWidth: 2
  }
});
