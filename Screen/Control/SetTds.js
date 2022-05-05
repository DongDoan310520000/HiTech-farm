import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from "react-native";

import React, { useState, useEffect } from "react";
import { auth, database, Firestore } from "../../Firebase/Config";
import { getDatabase, ref, set, onValue, update } from "firebase/database";

import AwesomeAlert from "react-native-awesome-alerts";

const SetTds = () => {
  const [colorLow, setColorLow] = useState("#1A49F2");
  const [colorHigh, setColorHigh] = useState("#1A49F2");
  const [colorLowLow, setColorLowLow] = useState("#1A49F2");
  const [colorHighLow, setColorHighLow] = useState("#1A49F2");
  const [colorLowHigh, setColorLowHigh] = useState("#1A49F2");
  const [colorHighHigh, setColorHighHigh] = useState("#1A49F2");

  const [dataMain, setDataMain] = useState(0);
  const [dataLow, setDataLow] = useState(0);
  const [dataHigh, setDataHigh] = useState(0);

  const highPoint = 1950;
  const lowPoint = 50;
  const count = 50;
  const highest = 2000;
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
    const TDS = Math.floor(dataMain);
    const TDSLow = Math.floor(dataLow);
    const TDSHigh = Math.floor(dataHigh);

    if (TDS >= 2000 || TDS <= 0) {
      alert("Giá trị TDS phải nằm trong giới hạn từ 0 - 2000.");
    } else if (TDSLow >= 2000 || TDSLow <= 0) {
      alert("Giá trị TDS mức thấp phải nằm trong giới hạn từ 0 - 2000.");
    } else if (TDSHigh >= 2000 || TDSHigh <= 0) {
      alert("Giá trị TDS mức cao phải nằm trong giới hạn từ 0 - 2000.");
    } else {
      const db = getDatabase();
      update(ref(db, "Device1/SetPoint"), {
        Tds: TDS,
        TdsLow: TDSLow,
        TdsHigh: TDSHigh,
      });
    }

    setShow(false);
  };

  const TdsMinusMain = () => {
    const db = getDatabase();

    setDataMain(dataMain - count);
    if (dataMain <= lowPoint) {
      setColorLow("#95A3D4");
    }
    if (dataMain <= highest) {
      setColorHigh("#1A49F2");
    }
    if (dataMain <= lowPoint) {
      setDataMain(lowest);
    }
  };

  const TdsAddMain = () => {
    const db = getDatabase();

    setDataMain(dataMain + count);

    if (dataMain >= lowest) {
      setColorLow("#1A49F2");
    }
    if (dataMain >= highPoint) {
      setColorHigh("#95A3D4");
    }
    if (dataMain >= highPoint) {
      setDataMain(highest);
    }
  };

  const TdsMinusLow = () => {
    const db = getDatabase();

    setDataLow(dataLow - count);
    if (dataLow <= lowPoint) {
      setColorLowLow("#95A3D4");
    }
    if (dataLow <= highest) {
      setColorHighLow("#1A49F2");
    }
    if (dataLow <= lowPoint) {
      setDataLow(lowest);
    }
  };

  const TdsAddLow = () => {
    const db = getDatabase();

    setDataLow(dataLow + count);

    if (dataLow >= lowest) {
      setColorLowLow("#1A49F2");
    }
    if (dataLow >= highPoint) {
      setColorHighLow("#95A3D4");
    }
    if (dataLow >= highPoint) {
      setDataLow(highest);
    }
  };
  const TdsMinusHigh = () => {
    const db = getDatabase();

    setDataHigh(dataHigh - count);
    if (dataHigh <= lowPoint) {
      setColorLowHigh("#95A3D4");
    }
    if (dataHigh <= highPoint) {
      setColorHighHigh("#1A49F2");
    }
    if (dataHigh <= lowPoint) {
      setDataHigh(lowest);
    }
  };

  const TdsAddHigh = () => {
    const db = getDatabase();

    setDataHigh(dataHigh + count);

    if (dataHigh >= lowest) {
      setColorLowHigh("#1A49F2");
    }
    if (dataHigh >= highPoint) {
      setColorHighHigh("#95A3D4");
    }
    if (dataHigh >= highPoint) {
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
        marginTop: 10,
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
      <Text style={{ fontWeight: "bold", fontSize: 24 }}>TDS</Text>
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
          onPress={TdsMinusMain}
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
            keyboardType="number-pad"
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
          onPress={TdsAddMain}
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
          onPress={TdsMinusLow}
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
          onPress={TdsAddLow}
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
          onPress={TdsMinusHigh}
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
          onPress={TdsAddHigh}
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
            backgroundColor: "#24ADE8",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 20, color: "#ffff", fontWeight: "bold" }}>
            SAVE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SetTds;
