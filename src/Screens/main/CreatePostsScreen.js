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

const CreateScreen = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create!</Text>
    </View>
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

export default CreateScreen;
