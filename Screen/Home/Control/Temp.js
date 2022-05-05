import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { auth, database, Firestore } from "../../../Firebase/Config";
import { getDatabase, ref, set, onValue, update } from "firebase/database";

// import Speedometer from "react-native-speedometer-chart";
import RNSpeedometer from "react-native-speedometer";
// import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge';
const Temp = () => {
  const [temp, setTemp] = useState(0);
  const [color, setColor] = useState("red");

  useEffect(() => {
    // const db = getDatabase();
    // const reference = ref(db, "Device1");
    // onValue(reference, (snapshot) => {
    //   setTemp(snapshot.val().Sensor.Temp);
    // });
    // console.log(temp);

    console.log(temp);
    const db = getDatabase();
    const reference = ref(db, "Device1");
    onValue(reference, (snapshot) => {
      setTemp(snapshot.val().Sensor.Temp);
    });
  }, []);
  
  return (
    <View
      style={{
        width: "49.9%",
        height: 178,
        alignItems: "center",
        backgroundColor: "white",
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: "grey",
      }}
    >
      <View
        style={{
          width: 40,
          height: 7,
          backgroundColor: "crimson",
          marginTop: 5,
          borderRadius: 20,
        }}
      ></View>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Temperature (°C)</Text>
      <RNSpeedometer
        value={temp}
        size={185}
        easeDuration={300}
        key={1}
        labels={[
          {
            labelColor: "#4AED8B",
            activeBarColor: "#4AED8B",
            key: 1
          },
          {
            labelColor: "#F1DE32",
            activeBarColor: "#F1DE32",
            key: 2
          },
          {
            labelColor: "#FF8D3A",
            activeBarColor: "#FF8D3A",
            key: 3
          },
        ]}
      />
  </View>
  );
};

export default Temp;
