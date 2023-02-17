import React, { useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Font from 'expo-font';
// import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import RegisterScreen from "./src/Screens/auth/RegisterScreen";
import LoginScreen from "./src/Screens/auth/LoginScreen";
import HomeScreen from "./src/Screens/main/HomeScreen";

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
//     "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
//   });
// };

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator
        initialRouteName="Login"
      >
        <AuthStack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <MainTab.Navigator>
      <MainTab.Screen name="Home" component={HomeScreen} />
      {/* <MainTab.Screen name="Posts" component={PostsScreen} />
      <MainTab.Screen name="Create" component={CreateScreen} />
      <MainTab.Screen name="Profile" component={ProfileScreen} /> */}
    </MainTab.Navigator>
  );
}

export default function App() {

  const routing = useRoute();
  // const [isReady, setIsReady] = useState(false)
  // if (!isReady) {
  //   return <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} />
  // }

  return <NavigationContainer>{routing}</NavigationContainer>;

  // return (
    // <NavigationContainer>
    // <View style={styles.container}>
    //     <AuthStack.Navigator
    //       initialRouteName="Login"
    //     >
    //       <AuthStack.Screen
    //         name="Register"
    //         component={RegisterScreen}
    //         options={{
    //           headerShown: false,
    //         }}
    //       />
    //       <AuthStack.Screen
    //         name="Login"
    //         component={LoginScreen}
    //         options={{
    //           headerShown: false,
    //         }}
    //       />
    //     </AuthStack.Navigator>
    // </View>
    // </NavigationContainer>
  //   <NavigationContainer>
  //     <Home />
  //   </NavigationContainer>
  // );
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
