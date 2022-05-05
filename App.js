import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { LogBox } from "react-native";
import { AsyncStorage } from 'react-native';
LogBox.ignoreLogs(["Setting a timer"]);

import { auth, database, Firestore } from "./Firebase/Config";
import { doc, setDoc } from "firebase/firestore";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import StackIntro from "./Screen/Login_Intro/Introducion/StackIntro";
import TabsNavigator from "./Screen/Home/TabsNavigator";

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(true);

  useEffect(() => {
    const addUser = doc(Firestore, "users", "Device");
    setDoc(addUser, {
      email: "dong@gmail.com",
      password: "123456",
      crops: "Salad",
    });
  });

  return (
    <NavigationContainer>
      {user ? (
        <Stack.Navigator initialRouteName="TabsNavigator">
          <Stack.Screen
            name="Login"
            component={StackIntro}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="TabsNavigator"
            component={TabsNavigator}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={StackIntro}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="TabsNavigator"
            component={TabsNavigator}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
