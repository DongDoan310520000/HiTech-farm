import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";

import Ph from "./SetPh";
import Tds from "./SetTds";
import Motor from "../Home/Control/Motor";

const Control = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <ScrollView
        style={{
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderBottomWidth: 1,
            marginBottom: 5,
          }}
        >
          <Ph />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderBottomWidth: 1,
          }}
        >
          <Tds />
        </View>
        <Motor />
        <View style={{ height: 100, backgroundColor: "#fff" }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Control;
