import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Alert,
} from "react-native";
import { Entypo } from '@expo/vector-icons';


const LoginScreen = ({ navigation }) => {

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [isEmailFocus, setIsEmailFocus] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);

  const initialState = {
    email: "",
    password: "",
  }

  const [state, setState] = useState(initialState);

  useEffect(() => {
    !isShowKeyboard && resetFocus();
  }, [isShowKeyboard]);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setIsShowKeyboard(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsShowKeyboard(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);


  const onLogin = () => {
    if (state.email && state.password) {
      setState(initialState);
      setIsShowPassword(false);
      Keyboard.dismiss();
      Alert.alert(`Email: ${state.email}, Password: ${state.password} `);
    } else {
      Alert.alert('Fill in all fields');
    }
  }

  const onChangeShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  }

  const onEmailFocus = () => {
    resetFocus();
    setIsEmailFocus(true);
  }
  const onPasswordFocus = () => {
    resetFocus();
    setIsPasswordFocus(true);
  }

  const resetFocus = () => {
    setIsEmailFocus(false);
    setIsPasswordFocus(false);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../../../assets/images/bg.png")} >
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <View
            style={{ ...styles.form, marginBottom: isShowKeyboard ? -100 : 126 }}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View>
                <TextInput
                  value={state.email}
                  textAlign={"left"}
                  onChangeText={(value) => setState(prev => ({ ...prev, email: value }))}
                  onFocus={onEmailFocus}
                  placeholder={"Email"}
                  placeholderTextColor={"#BDBDBD"}
                  maxLength={26}
                  style={{ ...styles.input, borderColor: isEmailFocus ? "#FF6C00" : "#E8E8E8" }}
                />
                <View>
                  <TextInput
                    value={state.password}
                    placeholder={"Password"}
                    onChangeText={(value) => setState(prev => ({ ...prev, password: value }))}
                    onFocus={onPasswordFocus}
                    placeholderTextColor={"#BDBDBD"}
                    autoComplete={"off"}
                    secureTextEntry={!isShowPassword}
                    maxLength={16}
                    style={{ ...styles.input, borderColor: isPasswordFocus ? "#FF6C00" : "#E8E8E8" }}
                  />
                  <TouchableOpacity
                    style={styles.btnShowPassword}
                    activeOpacity={0.7}
                    onPress={onChangeShowPassword}
                  >
                    <Entypo
                      name={isShowPassword ? "eye-with-line" : "eye"}
                      size={20}
                      color="#1B4371"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
            <TouchableOpacity
              style={styles.btnSubmit}
              activeOpacity={0.7}
              onPress={onLogin}
            >
              <Text style={styles.btnSubmitTitle}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.registrationLink}
              activeOpacity={0.7}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.registrationLinkTitle}>Don't have an account? Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    marginTop: 32,
    paddingVertical: 32,
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 1.17,
    textAlign: "center",
    color: "#212121",
  },
  form: {
    marginHorizontal: 16,
  },
  input: {
    height: 50,
    padding: 16,
    marginBottom: 16,

    wontSize: 16,
    lineHeight: 1.1875,
    color: "#212121",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  btnShowPassword: {
    position: "absolute",
    right: 1,
    padding: 15,
  },
  btnSubmit: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 27,
    marginBottom: 10,
    padding: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  btnSubmitTitle: {
    color: "#FFFFFF",
  },
  registrationLink: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
  },
  registrationLinkTitle: {
    color: "#1B4371",
  },
});

export default LoginScreen;
