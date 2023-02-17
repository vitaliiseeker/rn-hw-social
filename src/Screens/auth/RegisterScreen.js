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


const RegisterScreen = ({ navigation }) => {

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [avatarUploaded, setAvatarUploaded] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [isLoginFocus, setIsLoginFocus] = useState(false);
  const [isEmailFocus, setIsEmailFocus] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);

  const initialState = {
    login: "",
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

  const onRegister = () => {
    if (state.login && state.email && state.password) {
      setState(initialState);
      setIsShowPassword(false);
      Keyboard.dismiss();
      Alert.alert(`Login: ${state.login}, Email: ${state.email}, Password: ${state.password} `);
      // Alert.alert({ massage: state });
      // Alert.alert(`${ login } ${ email } ${ password }`);
      // Alert.alert(
      //   'Alert Title',
      //   'My Alert Msg',
      //   [
      //     {
      //       text: 'OK',
      //       style: 'OK',
      //     },
      //   ],
      //   {
      //     cancelable: true,
      //     oklable: true,
      //   },
      // );
    } else {
      Alert.alert('Fill in all fields');
    }
  }

  const handlerUploadAvatar = () => {
    setAvatarUploaded(!avatarUploaded);
  }

  const onChangeShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  }

  const onLoginFocus = () => {
    resetFocus();
    setIsLoginFocus(true);
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
    setIsLoginFocus(false);
    setIsEmailFocus(false);
    setIsPasswordFocus(false);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../../../assets/images/bg.png")} >
        <View style={styles.container}>
          <View style={styles.wrapImg}>
            <TouchableOpacity
              style={styles.btnAddAvatar}
              activeOpacity={0.7}
              onPress={handlerUploadAvatar}
            >
              <AntDesign
                name="pluscircleo"
                size={25}
                color={avatarUploaded ? "#E8E8E8" : "#FF6C00"}
                style={avatarUploaded && { transform: [{ rotate: '45deg' }] }}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Registration</Text>
          <View
            style={{ ...styles.form, marginBottom: isShowKeyboard ? -100 : 60 }}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View>
                <TextInput
                  value={state.login}
                  textAlign={"left"}
                  onChangeText={(value) => setState(prev => ({ ...prev, login: value }))}
                  onFocus={onLoginFocus}
                  placeholder={"Login"}
                  placeholderTextColor={"#BDBDBD"}
                  maxLength={20}
                  style={{ ...styles.input, borderColor: isLoginFocus ? "#FF6C00" : "#E8E8E8" }}
                />
                <TextInput
                  value={state.email}
                  textAlign={"left"}
                  onChangeText={(value) => setState(prev => ({ ...prev, email: value }))}
                  onFocus={onEmailFocus}
                  placeholder={"Email"}
                  placeholderTextColor={"#BDBDBD"}
                  // autoComplete={"email"}
                  // keyboardType={"email-address"}
                  // inputMode={"email"}
                  maxLength={26}
                  style={{ ...styles.input, borderColor: isEmailFocus ? "#FF6C00" : "#E8E8E8" }}
                />
                <View>
                  <TextInput
                    value={state.password}
                    textAlign={"left"}
                    onChangeText={(value) => setState(prev => ({ ...prev, password: value }))}
                    onFocus={onPasswordFocus}
                    placeholder={"Password"}
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
              onPress={onRegister}
            >
              <Text style={styles.btnSubmitTitle}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.loginLink}
              activeOpacity={0.7}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.loginLinkTitle}>Already have an account? Login</Text>
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
  wrapImg: {
    top: -60,
    width: 120,
    height: 120,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  btnAddAvatar: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },
  iconAddAvatar: {
    transform: [{ rotate: '45deg' }],
    transition: `transform 2250ms cubicBbezier(0.57, 0.21, 0.69, 1.25)`,
  },
  // image: {
  //   // flex: 1,
  //   resizeMode: "cover",
  //   justifyContent: "center",s
  //   alignItems: "center",
  //   backgroundColor: "#000",
  // },
  title: {
    marginTop: -44,
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
  loginLink: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
  },
  loginLinkTitle: {
    color: "#1B4371",
  },
});

export default RegisterScreen;
