import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { auth, database, Firestore } from "../../../Firebase/Config";
import { getDatabase, ref, set, onValue, update } from "firebase/database";

// import Speedometer from "react-native-speedometer-chart";
import RNSpeedometer from "react-native-speedometer";

const Humid = () => {
  const [humid, setHumid] = useState(0);
  const [color, setColor] = useState("red");

  useEffect(() => {
    // const db = getDatabase();
    // const reference = ref(db, "Device1");
    // onValue(reference, (snapshot) => {
    //   setHumid(snapshot.val().Sensor.Humid);
    // });
    // console.log(Humid);

    console.log(Humid);
    const db = getDatabase();
    const reference = ref(db, "Device1");
    onValue(reference, (snapshot) => {
      setHumid(snapshot.val().Sensor.Humid);
    });
  }, []);

  // setInterval( () => {
  // console.log(Humid);
  // if(Humid > 30){
  //   setColor('red')
  // }
  // else{
  //   setColor('green')
  // }
  // },5000)
  return (
    <View
      style={{
        width: "49.9%",
        height: 178,
        alignItems: "center",
        backgroundColor: "white",
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: "grey",
      }}
    >
      <View
        style={{
          width: 40,
          height: 7,
          backgroundColor: "blue",
          marginTop: 5,
          borderRadius: 20,
        }}
      ></View>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Humidity (%)</Text>
      <RNSpeedometer
        value={humid}
        size={185}
        easeDuration={300}
        labels={[
          {
            labelColor: "#23DF9C",
            activeBarColor: "#23DF9C",
          },
          {
            labelColor: "#2BE5F1",
            activeBarColor: "#2BE5F1",
          },
          {
            labelColor: "#325FFF",
            activeBarColor: "#325FFF",
          },
        ]}
      />
    </View>
  );
};

export default Humid;
