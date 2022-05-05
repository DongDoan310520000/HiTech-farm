import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";

import React, { useState, useEffect } from "react";
import { auth, database, Firestore } from "../../Firebase/Config";
import { getDatabase, ref, set, onValue, update } from "firebase/database";

import AwesomeAlert from "react-native-awesome-alerts";

const SetPh = () => {
  //Color Button Data
  const [colorLow, setColorLow] = useState("#06D61B");
  const [colorHigh, setColorHigh] = useState("#06D61B");

  const [colorLowLow, setColorLowLow] = useState("#06D61B");
  const [colorHighLow, setColorHighLow] = useState("#06D61B");

  const [colorLowHigh, setColorLowHigh] = useState("#06D61B");
  const [colorHighHigh, setColorHighHigh] = useState("#06D61B");

  //SetPoint Data
  const [ph, setPh] = useState(0);
  const [phLow, setPhLow] = useState(0);
  const [phHigh, setPhHigh] = useState(0);
  const [dataMain, setDataMain] = useState(0);
  const [dataLow, setDataLow] = useState(0);
  const [dataHigh, setDataHigh] = useState(0);

  //Magic Number
  const highPoint = 14.5;
  const lowPoint = 0.5;
  const count = 0.5;
  const highest = 15;
  const lowest = 0;

  //Alert
  const [show, setShow] = useState(false);

  const ShowAlert = () => {
    setShow(true);
    // console.log("OK");
  };
  const HideAlert = () => {
    setShow(false);
    // console.log("NO");
  };

  
  const saveData = () => {
  
    const PH = Number(dataMain);
    const PHLow = Number(dataLow);
    const PHHigh = Number(dataHigh);
  
    if(PH >= 15 || PH <= 0) {
      alert("Giá trị pH phải nằm trong mức 0 - 15")
    }

    else if(PHLow >= 15 || PHLow <= 0) {
      alert("Giá trị pH mức thấp phải nằm trong mức 0 - 15")
    }

    else if(PHHigh >= 15 || PHHigh <= 0) {
      alert("Giá trị pH mức cao phải nằm trong mức 0 - 15")
    }

    else{
      
      const db = getDatabase();
      update(ref(db, "Device1/SetPoint"), {
        Ph: PH,
        PhLow: PHLow,
        PhHigh: PHHigh,
      });
    }

    setShow(false);

  };

  const PhMinusMain = () => {
    const db = getDatabase();

    setDataMain(dataMain - count);
    if (dataMain <= lowPoint) {
      setColorLow("#ACCDAF");
    }
    if (dataMain <= highest) {
      setColorHigh("#06D61B");
    }
    if (dataMain <= lowPoint) {
      setDataMain(lowest);
    }
  };

  const PhAddMain = () => {
    const db = getDatabase();

    setDataMain(dataMain + count);

    if (dataMain >= lowest) {
      setColorLow("#06D61B");
    }
    if (dataMain >= highPoint) {
      setColorHigh("#ACCDAF");
    }
    if (dataMain >= highest) {
      setDataMain(highest);
    }
  };

  const PhMinusLow = () => {
    const db = getDatabase();

    setDataLow(dataLow - count);
    if (dataLow <= lowPoint) {
      setColorLowLow("#ACCDAF");
    }
    if (dataLow <= highest) {
      setColorHighLow("#06D61B");
    }
    if (dataLow <= lowPoint) {
      setDataLow(lowest);
    }
  };

  const PhAddLow = () => {
    const db = getDatabase();

    setDataLow(dataLow + lowPoint);

    if (dataLow >= lowest) {
      setColorLowLow("#06D61B");
    }
    if (dataLow >= highPoint) {
      setColorHighLow("#ACCDAF");
    }
    if (dataLow >= highest) {
      setDataMain(highest);
    }
  };
  const PhMinusHigh = () => {
    const db = getDatabase();

    setDataHigh(dataHigh - lowPoint);
    if (dataHigh <= lowPoint) {
      setColorLowHigh("#ACCDAF");
    }
    if (dataHigh <= highest) {
      setColorHighHigh("#06D61B");
    }
    if (dataHigh <= lowPoint) {
      setDataHigh(lowest);
    }
  };

  const PhAddHigh = () => {
    const db = getDatabase();

    setDataHigh(dataHigh + lowPoint);

    if (dataHigh >= lowest) {
      setColorLowHigh("#06D61B");
    }
    if (dataHigh >= highPoint) {
      setColorHighHigh("#ACCDAF");
    }
    if (dataHigh >= highest) {
      setDataHigh(highest);
    }
  };

  return (
    <View
      style={{
        flex: 1.5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
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
      <Text style={{ fontWeight: "bold", fontSize: 24 }}>PH</Text>
      <View
        style={{
          width: 369,
          height: 52,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#E5E4E4",
          borderRadius: 30,
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ fontSize: 18 }}>Đặt giá trị</Text>
        </View>

        <TouchableOpacity
          style={{
            width: 70,
            height: 50,
            alignItems: "center",
            backgroundColor: colorLow,
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
          }}
          onPress={PhMinusMain}
        >
          <Text style={{ fontSize: 62, marginTop: -19, color: "white" }}>
            -
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: 70,
            height: 50,
            alignItems: "center",
            backgroundColor: "#E5E4E4",
            justifyContent: "center",
          }}
        >
          <TextInput
            style={{
              flex: 1,
              fontSize: 24,
              fontWeight: "bold",
              width: 70,
              color: "black",
            }}
            maxLength={4}
            onChangeText={setDataMain}
            value={dataMain.toString()}
            placeholder={dataMain.toString()}
            textAlign="center"
            placeholderTextColor="black"
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity
          style={{
            width: 70,
            height: 50,
            alignItems: "center",
            backgroundColor: colorHigh,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            justifyContent: "center",
          }}
          onPress={PhAddMain}
        >
          <Text style={{ fontSize: 42, marginTop: -5.5, color: "white" }}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: 369,
          height: 52,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#E5E4E4",
          borderRadius: 30,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ fontSize: 18 }}>Ngưỡng Thấp</Text>
        </View>

        <TouchableOpacity
          style={{
            width: 70,
            height: 50,
            alignItems: "center",
            backgroundColor: colorLowLow,
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
          }}
          onPress={PhMinusLow}
        >
          <Text style={{ fontSize: 62, marginTop: -19, color: "white" }}>
            -
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: 70,
            height: 50,
            alignItems: "center",
            backgroundColor: "#E5E4E4",
            justifyContent: "center",
          }}
        >
          <TextInput
            style={{
              flex: 1,
              fontSize: 24,
              fontWeight: "bold",
              width: 70,
              color: "black",
            }}
            maxLength={4}
            onChangeText={setDataLow}
            value={dataLow.toString()}
            placeholder={dataLow.toString()}
            textAlign="center"
            placeholderTextColor="black"
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity
          style={{
            width: 70,
            height: 50,
            alignItems: "center",
            backgroundColor: colorHighLow,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            justifyContent: "center",
          }}
          onPress={PhAddLow}
        >
          <Text style={{ fontSize: 42, marginTop: -5.5, color: "white" }}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: 369,
          height: 52,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#E5E4E4",
          borderRadius: 30,
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ fontSize: 18 }}>Ngưỡng Cao</Text>
        </View>

        <TouchableOpacity
          style={{
            width: 70,
            height: 50,
            alignItems: "center",
            backgroundColor: colorLowHigh,
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
          }}
          onPress={PhMinusHigh}
        >
          <Text style={{ fontSize: 62, marginTop: -19, color: "white" }}>
            -
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: 70,
            height: 50,
            alignItems: "center",
            backgroundColor: "#E5E4E4",
            justifyContent: "center",
          }}
        >
          <TextInput
            style={{
              flex: 1,
              fontSize: 24,
              fontWeight: "bold",
              width: 70,
              color: "black",
            }}
            maxLength={4}
            onChangeText={setDataHigh}
            value={dataHigh.toString()}
            placeholder={dataHigh.toString()}
            textAlign="center"
            placeholderTextColor="black"
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity
          style={{
            width: 70,
            height: 50,
            alignItems: "center",
            backgroundColor: colorHighHigh,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            justifyContent: "center",
          }}
          onPress={PhAddHigh}
        >
          <Text style={{ fontSize: 42, marginTop: -5.5, color: "white" }}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: 75,
          height: 35,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
          marginBottom: 15,
        }}
      >
        <AwesomeAlert
          show={show}
          showProgress={false}
          title="Cập nhật độ PH"
          message="Bạn có muốn lưu những giá trị này không?"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="HỦY"
          confirmText="ĐỒNG Ý"
          confirmButtonColor="crimson"
          onCancelPressed={HideAlert}
          onConfirmPressed={saveData}
        />

        <TouchableOpacity
          onPress={ShowAlert}
          style={{
            backgroundColor: "#4EE378",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10
          }}
        >
          <Text style={{ fontSize: 20, color: "#ffff", fontWeight: "bold",  }}>
            SAVE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SetPh;
