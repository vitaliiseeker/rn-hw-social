import React, { useState } from "react";
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from "react-native";
import * as Font from 'expo-font';
// import { AppLoading } from 'expo';
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
//     "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
//   });
// };

export default function App() {

  // const [isReady, setIsReady] = useState(false)
  // if (!isReady) {
  //   return <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} />
  // }

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/bg.png")}>
        {/* <RegistrationScreen /> */}
        <LoginScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
