import React, { useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import * as Font from 'expo-font';
// import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { useRoute } from './router';


// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
//     "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
//   });
// };

export default function App() {

  const routing = useRoute({});
  // const [isReady, setIsReady] = useState(false)
  // if (!isReady) {
  //   return <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} />
  // }

  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
