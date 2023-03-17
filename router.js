
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegisterScreen from "./src/Screens/auth/RegisterScreen";
import LoginScreen from "./src/Screens/auth/LoginScreen";
import HomeScreen from "./src/Screens/main/HomeScreen";
import PostsScreen from "./src/Screens/main/PostsScreen";
import CreateScreen from "./src/Screens/main/CreatePostsScreen";
import ProfileScreen from "./src/Screens/main/ProfileScreen";

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator
      // initialRouteName="Login"
      >
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <MainTab.Navigator
      // screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' } }}
      screenOptions={{
        tabBarShowLabel: false,
      }}
      activeColor="red"
      inactiveColor="blue"
      barStyle={{ backgroundColor: "#FF6C00", borderRadius: 20, padding: 20 }}
      tabBarBadgeStyle={{ backgroundColor: "#FF6C00", borderRadius: 20 }}
    >
      {/* <MainTab.Navigator tabBarOptions={{ showLabel: false }}> */}
      {/* <MainTab.Screen name="Home" component={HomeScreen} /> */}
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="appstore-o"
              size={size}
              color={color} />
          )
        }}
        name="Posts"
        component={PostsScreen} />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="plus"
              size={size}
              color={color} />
          ),
          tabBarColor: "#000000",
          activeColor: "red",
          inactiveColor: "blue",
          tabBarBadgeStyle: { backgroundColor: "#FF6C00" },
        }}
        activeColor="red"
        inactiveColor="blue"
        tabBarBadgeStyle={{ backgroundColor: "#FF6C00" }}
        name="Create"
        component={CreateScreen} />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user"
              size={size}
              color={color} />
          )
        }}
        name="Profile"
        component={ProfileScreen} />
    </MainTab.Navigator>
  );
}