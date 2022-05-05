import { View, Text, TouchableOpacity, StatusBar, SafeAreaView } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import SLIcons from "react-native-vector-icons/SimpleLineIcons";
import F5Icons from "react-native-vector-icons/FontAwesome5";
//  import StackCrop from './StackCrop'
// import Tds from './Tds';

const ControlDevice = ({ navigation }) => {
  return (

      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", alignItems: "center" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
        <View style={{marginTop: 60,}}>

        </View>

      <TouchableOpacity
        style={{
          width: "100%",
          alignItems: "flex-end",
          marginTop: -55,
          marginRight: 15,
          marginBottom: 10,
        }}  
      >
        <Ionicons
          name="add-circle-outline"
          size={40}
          color="#30BCE9"
        ></Ionicons>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: "99.8%",
          height: 100,
          marginTop: -10,
          borderWidth: 1,
          borderColor: "#000",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("Control")}
      >
        <Text style={{ fontSize: 24, marginLeft: 25 }}>SALAD CROPS</Text>
        <Text style={{ fontSize: 15, marginLeft: 25 }}>1 Total</Text>
      </TouchableOpacity>
    </SafeAreaView>

  );
};

export default ControlDevice;
