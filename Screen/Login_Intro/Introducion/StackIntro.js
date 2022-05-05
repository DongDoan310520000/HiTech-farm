import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { decode, encode } from "base-64";
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

import Intro1 from "./Intro1";
import Intro2 from "./Intro2";
import Intro3 from "./Intro3";
import Intro4 from "./Intro4";
import Login from "../Login/Login";
const Stack = createStackNavigator();

export default function StackIntro() {
  // const [loading, setLoading] = useState(true)
  // const [user, setUser] = useState(null)

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Intro1"
        component={Intro1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Intro2"
        component={Intro2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Intro3"
        component={Intro3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Intro4"
        component={Intro4}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
