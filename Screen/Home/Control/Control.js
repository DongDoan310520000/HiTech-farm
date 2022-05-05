import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import SLIcons from "react-native-vector-icons/SimpleLineIcons";
import F5Icons from "react-native-vector-icons/FontAwesome5";

import Tds from "./Tds";
import Ph from "./Ph";
import Temp from "./Temp";
import Humid from "./Humid";
import Motor from "./MotorSeen";

const Control = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor:'white'}}>
      <ScrollView style={{backgroundColor: "#FFFF" }}>
        <TouchableOpacity
          style={{
            alignItems: "flex-start",
            width: "100%",
            marginLeft: 30,
            marginTop: 5,
            marginBottom: 10,
          }}
          onPress={() => navigation.navigate("Crops")}
        >
          <F5Icons name="chevron-left" size={25} color="#0C578D"></F5Icons>
        </TouchableOpacity>
        <Tds />
        <Ph />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Temp />
          <Humid />
        </View>
        <View>
          <Motor />
        </View>
        <View style={{ height: 100 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Control;
