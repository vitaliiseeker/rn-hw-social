import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  Alert,
} from "react-native";
import { AntDesign, Entypo } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

const Settings = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Profile = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}


const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOME!</Text>
    </View>
    // <Tabs.Navigator
    //   screenOptions={({ route }) => ({
    //     tabBarIcon: ({ focused, color, size }) => {
    //       let iconName;

    //       if (route.name === "Profile") {
    //         iconName = focused
    //           ? "ios-information-circle"
    //           : "ios-information-circle-outline";
    //       } else if (route.name === "Settings") {
    //         iconName = focused ? "ios-list-box" : "ios-list";
    //       }
    //       return <Ionicons name={iconName} size={size} color={color} />;
    //     },
    //   })}
    //   tabBarOptions={{
    //     activeTintColor: "tomato",
    //     inactiveTintColor: "gray",
    //   }}
    // >
    //   <Tabs.Screen name="Settings" component={Settings} />
    //   <Tabs.Screen name="Profile" component={Profile} />
    // </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
