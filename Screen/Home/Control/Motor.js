import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { auth, database, Firestore } from "../../../Firebase/Config";
import { getDatabase, ref, set, onValue, update } from "firebase/database";

import Ionicons from "react-native-vector-icons/Ionicons";
import SLIcons from "react-native-vector-icons/SimpleLineIcons";
import F5Icons from "react-native-vector-icons/FontAwesome5";
import FaIcons from "react-native-vector-icons/FontAwesome";
import MIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FIcons from "react-native-vector-icons/Fontisto";
import style from "../../Login_Intro/Login/style";

const Motor = () => {
  const [pump1, setPumpA] = useState(false);
  const [pump2, setPumpB] = useState(false);
  const [light1, setLightA] = useState(false);
  const [light2, setLightB] = useState(false);

  useEffect(() => {
    // const db = getDatabase();
    // const reference = ref(db, "Device1");
    // onValue(reference, (snapshot) => {
    //   setTemp(snapshot.val().Sensor.Temp);
    // });
    // console.log(temp);

    const db = getDatabase();
    const reference = ref(db, "Device1");
    onValue(reference, (snapshot) => {
      setPumpA(snapshot.val().Control.PumpA);
      setPumpB(snapshot.val().Control.PumpB);
      setLightA(snapshot.val().Control.LightA);
      setLightB(snapshot.val().Control.LightB);
    });
  }, []);

  const pumpA = () => {
    setPumpA(!pump1);
    const db = getDatabase();
    update(ref(db, "Device1/Control"), {
      PumpA: !pump1,
    });
  };
  const pumpB = () => {
    setPumpA(!pump1);
    const db = getDatabase();
    update(ref(db, "Device1/Control"), {
      PumpB: !pump2,
    });
  };
  const lightA = () => {
    setPumpA(!pump1);
    const db = getDatabase();
    update(ref(db, "Device1/Control"), {
      LightA: !light1,
    });
  };
  const lightB = () => {
    setPumpA(!pump1);
    const db = getDatabase();
    update(ref(db, "Device1/Control"), {
      LightB: !light2,
    });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        style={{
          width: 100,
          height: 85,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffff",
          borderRadius: 10,
          marginTop: 5,
          borderWidth: 1,
          borderBottomWidth: 2,
          borderColor: "grey",
        }}
        onPress={pumpA}
      >
         <FaIcons
          style={{ marginTop: 7, marginLeft: 65 }}
          name="circle"
          size={16}
          color={pump1 == true ? "#00FF29" : "#BED5C2"}
        ></FaIcons>
        <MIcons
          style={{ marginTop: -7 }}
          name="fan"
          size={42}
          color={pump1 == true ? "#0C578D" : "#636262"}
        ></MIcons>
        <Text style={{ marginBottom: 5, fontSize: 16 }}>Pump A</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 100,
          height: 85,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffff",
          borderRadius: 10,
          marginTop: 5,
          borderWidth: 1,
          borderBottomWidth: 2,
          borderColor: "grey",
        }}
        onPress={pumpB}
      >
        <FaIcons
          style={{ marginTop: 7, marginLeft: 65 }}
          name="circle"
          size={16}
          color={pump2 == true ? "#00FF29" : "#BED5C2"}
        ></FaIcons>
        <MIcons
          style={{ marginTop: -7 }}
          name="fan"
          size={42}
          color={pump2 == true ? "#0C578D" : "#636262"}
        ></MIcons>
        <Text style={{ marginBottom: 5, fontSize: 16 }}>Pump B</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 100,
          height: 85,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffff",
          borderRadius: 10,
          marginTop: 5,
          borderWidth: 1,
          borderBottomWidth: 2,
          borderColor: "grey",
        }}
        onPress={lightA}
      >
          <FaIcons
          style={{ marginTop: 7, marginLeft: 65 }}
          name="circle"
          size={16}
          color={light1 == true ? "#00FF29" : "#BED5C2"}
        ></FaIcons>
        <FIcons
          style={{ marginTop: -7 }}
          name="lightbulb"
          size={42}
          color={light1 == true ? "#0C578D" : "#636262"}
        ></FIcons>
        <Text style={{ marginBottom: 5, fontSize: 16 }}>Light A</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 100,
          height: 85,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffff",
          borderRadius: 10,
          marginTop: 5,
          borderWidth: 1,
          borderBottomWidth: 2,
          borderColor: "grey",
        }}
        onPress={lightB}
      >
           <FaIcons
          style={{ marginTop: 7, marginLeft: 65 }}
          name="circle"
          size={16}
          color={light2 == true ? "#00FF29" : "#BED5C2"}
        ></FaIcons>
        <FIcons
          style={{ marginTop: -7 }}
          name="lightbulb"
          size={42}
          color={light2 == true ? "#0C578D" : "#636262"}
        ></FIcons>
        <Text style={{ marginBottom: 5, fontSize: 16 }}>Light B</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Motor;
