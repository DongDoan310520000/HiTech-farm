import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Dimensions, StatusBar, SafeAreaView } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
  a,
} from "react-native-chart-kit";
import RNSpeedometer from "react-native-speedometer";


import { auth, database, Firestore } from "../../../Firebase/Config";
import { getDatabase, ref, set, onValue, update } from "firebase/database";

const Ph = () => {
  const [dt, setDt] = useState(new Date().toLocaleString());
  const [ph, setPh] = useState(0);
  const [phSet, setPhSet] = useState(0);
  const [phLow, setPhLow] = useState(0);
  const [phHigh, setPhHigh] = useState(0);

  useEffect(() => {

    const db = getDatabase();
    const reference = ref(db, "Device1");
    onValue(reference, (snapshot) => {
      setPh(snapshot.val().Sensor.Ph);
      setPhSet(snapshot.val().SetPoint.Ph);
      setPhLow(snapshot.val().SetPoint.PhLow);
      setPhHigh(snapshot.val().SetPoint.PhHigh);
    });
    let statusBoard = setInterval(() => {
      setDt(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(statusBoard);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
      }}
    >
      <View
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: "grey",
          alignItems: "center",
          width: "99.8%",
        }}
      >
              <View
          style={{
            width: 40,
            height: 7,
            borderRadius: 20,
            backgroundColor: "green",
            marginTop: 10,
          }}
        ></View>
        <View style={{flexDirection: 'column',justifyContent:'center', alignItems: 'center',}}>
       <Text style={{fontSize: 20, fontWeight: 'bold', }}>
          pH 
        </Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', }}>
          {ph}
        </Text>
       </View>
       <View style={{width: '100%',flexDirection: 'row', justifyContent:'space-around', marginBottom: 10}}>
       
       <View style={{flexDirection: 'column',justifyContent:'center', alignItems: 'center'}}>
       <View
          style={{
            width: 12,
            height: 12,
            borderRadius: 20,
            backgroundColor: "green",
            marginTop: 10,
          }}
        ></View>
       <Text style={{fontSize: 18, fontWeight: 'bold', }}>
          pH Mức Thấp
        </Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', }}>
          {phLow}
        </Text>
       </View>

       <View style={{flexDirection: 'column',justifyContent:'center', alignItems: 'center'}}>
       <View
          style={{
            width: 12,
            height: 12,
            borderRadius: 20,
            backgroundColor: "green",
            marginTop: 10,
          }}
        ></View>
       <Text style={{fontSize: 18, fontWeight: 'bold', }}>
          pH Cài Đặt
        </Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', }}>
          {phSet}
        </Text>
       </View>

       <View style={{flexDirection: 'column',justifyContent:'center', alignItems: 'center'}}>
       <View
          style={{
            width: 12,
            height: 12,
            borderRadius: 20,
            backgroundColor: "green",
            marginTop: 10,
          }}
        ></View>
       <Text style={{fontSize: 18, fontWeight: 'bold', }}>
          pH Mức Cao
        </Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', }}>
          {phHigh}
        </Text>
       </View>
       
       </View>
      </View>

    </View>
  );
};

export default Ph;
