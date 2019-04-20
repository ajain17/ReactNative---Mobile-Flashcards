import { Constants } from "expo";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { compose, createStore } from "redux";
import AppContainer from "./navigation/AppNavigator";
import reducer from "./reducers";
import { purple, white } from "./utils/colors";
import middleware from "./middleware";
import { setLocalNotification } from "./utils/helper";
function UdaciStatusBar({ backgroundColor, color, ...props }) {
  return (
    <View style={{ backgroundColor, color, height: Constants.statusBarHeight }}>
      <StatusBar transluscent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const store = createStore(
  reducer,
  compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <UdaciStatusBar
            backgroundColor={purple}
            color={white}
            barStyle="light-content"
          />
          <AppContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
