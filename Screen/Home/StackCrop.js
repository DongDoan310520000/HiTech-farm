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

import Crops from "./Crops";
import Control from "./Control/Control";
// import Ph from './Ph'

const Stack = createStackNavigator();

export default function StackIntro() {
  //   const [loading, setLoading] = useState(true)
  //   const [user, setUser] = useState(null)

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Crops"
        component={Crops}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Control"
        component={Control}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
