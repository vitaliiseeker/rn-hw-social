import React, { useState, useRef, useEffect } from 'react';
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


const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [avatarUploaded, setAvatarUploaded] = useState(false);

  const [isFocus, setIsFocus] = useState(false);
  const componentRef = useRef();

  const emailHandler = text => setEmail(text);
  const passwordHandler = text => setPassword(text);

  useEffect(() => {
    setIsFocus(componentRef.current?.isFocused());
  }, [componentRef]);

  const onLogin = () => {
    if (email && password) {
      setEmail("");
      setPassword("");
      setIsShowPassword(false);
      Alert.alert(`${email} ${password}`);
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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.form}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View>
              <TextInput
                value={email}
                textAlign={"left"}
                onChangeText={emailHandler}
                placeholder={"Email"}
                placeholderTextColor={"#BDBDBD"}
                // autoComplete={"email"}
                // keyboardType={"email-address"}
                // inputMode={"email"}
                maxLength={26}
                // ref={componentRef}
                // caretHidden={true}
                style={styles.input}
              />
              <View>
                <TextInput
                  value={password}
                  textAlign={"left"}
                  onChangeText={passwordHandler}
                  placeholder={"Password"}
                  placeholderTextColor={"#BDBDBD"}
                  autoComplete={"off"}
                  secureTextEntry={!isShowPassword}
                  maxLength={16}
                  style={styles.input}
                // onFocus={() => { style = { { borderColor: "#FF6C00" } }}}
                // style={{ ...styles.input, marginBottom: 43 }}
                // ref={componentRef}
                // style={{ ...styles.input, borderColor: componentRef.current?.isFocused() ? "#FF6C00" : "#E8E8E8" }}
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
        </View>
        <TouchableOpacity
          style={styles.registrationLink}
          activeOpacity={0.7}
        // onPress={ }
        >
          <Text style={styles.registrationLinkTitle}>Don't have an account? Register</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // flexGrow: 0.7,
    // flexShrink: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    marginTop: 32,
    // marginBottom: 17,
    paddingVertical: 32,
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 1.17,
    textAlign: "center",
    // letterSpacing: "0.01em",
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
    // borderColor: `${isFocused() ? "#F6F6F6" : "#E8E8E8"}`,
    backgroundColor: "#F6F6F6",
    // },
  },
  btnShowPassword: {
    position: "absolute",
    right: 1,
    padding: 15,
  },
  btnSubmit: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
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
    marginBottom: 126,
  },
  registrationLinkTitle: {
    color: "#1B4371",
  },
});

export default LoginScreen;
