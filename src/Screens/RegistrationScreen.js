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


const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [avatarUploaded, setAvatarUploaded] = useState(false);

  const [isFocus, setIsFocus] = useState(false);
  const componentRef = useRef();

  const loginHandler = text => setLogin(text);
  const emailHandler = text => setEmail(text);
  const passwordHandler = text => setPassword(text);

  useEffect(() => {
    setIsFocus(componentRef.current?.isFocused());
  }, [componentRef]);

  const onRegistration = () => {
    if (login && email && password) {
      setLogin("");
      setEmail("");
      setPassword("");
      setIsShowPassword(false);
      Alert.alert(`${login} ${email} ${password}`);
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
        <View style={styles.wrapImg}>
          <ImageBackground
            style={styles.image} />
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
        <View style={styles.form}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View>
              <TextInput
                value={login}
                textAlign={"left"}
                onChangeText={loginHandler}
                placeholder={"Login"}
                placeholderTextColor={"#BDBDBD"}
                maxLength={20}
                // style={styles.input}
                ref={componentRef}
                style={styles.input}
              />
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
            onPress={onRegistration}
          >
            <Text style={styles.btnSubmitTitle}>Register</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.loginLink}
          activeOpacity={0.7}
        // onPress={ }
        >
          <Text style={styles.loginLinkTitle}>Already have an account? Login</Text>
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
  },
  // image: {
  //   // flex: 1,
  //   resizeMode: "cover",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "#000",
  // },
  title: {
    marginTop: -44,
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
  loginLink: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    marginBottom: 60,
  },
  loginLinkTitle: {
    color: "#1B4371",
  },
});

export default RegistrationScreen;
