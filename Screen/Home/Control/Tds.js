import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Dimensions, StatusBar, SafeAreaView } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  StackedBarChart,
  a,
} from "react-native-chart-kit";
import RNSpeedometer from "react-native-speedometer";


import { auth, database, Firestore } from "../../../Firebase/Config";
import { getDatabase, ref, set, onValue, update } from "firebase/database";

const Tds = () => {
  const [dt, setDt] = useState(new Date().toLocaleString());
  const [tds, setTds] = useState(0);
  const [tdsSet, setTdsSet] = useState(0);
  const [tdsLow, setTdsLow] = useState(0);
  const [tdsHigh, setTdsHigh] = useState(0);

  useEffect(() => {

    const db = getDatabase();
    const reference = ref(db, "Device1");
    onValue(reference, (snapshot) => {
      setTds(snapshot.val().Sensor.Tds);
      setTdsSet(snapshot.val().SetPoint.Tds);
      setTdsLow(snapshot.val().SetPoint.TdsLow);
      setTdsHigh(snapshot.val().SetPoint.TdsHigh);
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
            backgroundColor: "navy",
            marginTop: 10,
          }}
        ></View>
        <View style={{flexDirection: 'column',justifyContent:'center', alignItems: 'center',}}>
       <Text style={{fontSize: 20, fontWeight: 'bold', }}>
          TDS 
        </Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', }}>
          {tds}
        </Text>
       </View>
       <View style={{width: '100%',flexDirection: 'row', justifyContent:'space-around', marginBottom: 10}}>
       
       <View style={{flexDirection: 'column',justifyContent:'center', alignItems: 'center'}}>
       <View
          style={{
            width: 12,
            height: 12,
            borderRadius: 20,
            backgroundColor: "navy",
            marginTop: 10,
          }}
        ></View>
       <Text style={{fontSize: 18, fontWeight: 'bold', }}>
          TDS Mức Thấp
        </Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', }}>
          {tdsLow}
        </Text>
       </View>

       <View style={{flexDirection: 'column',justifyContent:'center', alignItems: 'center'}}>
       <View
          style={{
            width: 12,
            height: 12,
            borderRadius: 20,
            backgroundColor: "navy",
            marginTop: 10,
          }}
        ></View>
       <Text style={{fontSize: 18, fontWeight: 'bold', }}>
          TDS Cài Đặt
        </Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', }}>
          {tdsSet}
        </Text>
       </View>

       <View style={{flexDirection: 'column',justifyContent:'center', alignItems: 'center'}}>
       <View
          style={{
            width: 12,
            height: 12,
            borderRadius: 20,
            backgroundColor: "navy",
            marginTop: 10,
          }}
        ></View>
       <Text style={{fontSize: 18, fontWeight: 'bold', }}>
          TDS Mức Cao
        </Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', }}>
          {tdsHigh}
        </Text>
       </View>
       
       </View>
      </View>

    </View>
  );
};

export default Tds;
