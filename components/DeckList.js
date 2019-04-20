import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
class DeckList extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    // debugger;
    // setDummyData().then(decks => {
    //   debugger;
    //   dispatch(receiveDecks(decks));
    // });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>I am deck list</Text>
      </View>
    );
  }
}

export default connect()(DeckList);
