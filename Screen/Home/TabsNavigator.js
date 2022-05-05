import React from "react";
import { View, Button, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./StackCrop";
import Control from "../Control/Control";
import Connectivity from "../Connectivity/Connectivity";
import User from "../User/User";

const Tabs = createBottomTabNavigator();
const TabsNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Control") {
            iconName = focused ? "settings" : "settings";
          } else if (route.name === "Connectivity") {
            iconName = focused ? "earth" : "earth";
            size= 26.5
          } else if (route.name === "User") {
            iconName = focused ? "person" : "person";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} style={{justifyContent: 'center'}} />;
        },
        tabBarActiveTintColor: "#0D79C6",
        tabBarInactiveTintColor: "#636262",
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 2,
          borderColor: "#000",
        },
        tabBarLabelStyle: {
          fontSize: 13,
          marginBottom: 2,
        },
      })}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Control" component={Control} />
      <Tabs.Screen name="Connectivity" component={Connectivity} />
      <Tabs.Screen name="User" component={User} />
    </Tabs.Navigator>
  );
};
export default TabsNavigator;
