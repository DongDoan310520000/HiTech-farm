import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const Intro2 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{
            width: "94%",
            height: "70%",
            resizeMode: "stretch",
            marginLeft: 0,
          }}
          source={require("../../Image/Intro3.1.png")}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            flexDirection: "column",
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            Màn hình thời gian thực
          </Text>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 15 }}>
            & Điều khiển
          </Text>

          <Text style={{ fontSize: 15 }}>
            Giám sát và điều khiển hệ thống theo thời gian thực, lưu trữ và sao
            lưu dữ liệu sinh trưởng tốt nhất đến từ
          </Text>

          <Text>những nhà nuôi trồng khác.</Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#CBC7C7",
              borderRadius: 10,
              marginRight: 8,
            }}
          ></View>

          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#CBC7C7",
              borderRadius: 10,
              marginRight: 8,
            }}
          ></View>

          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#407BFF",
              borderRadius: 10,
              marginRight: 8,
            }}
          ></View>

          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#CBC7C7",
              borderRadius: 10,
              marginRight: 8,
            }}
          ></View>
        </View>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            marginBottom: 20,
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            style={{ width: 110, height: 50 }}
            onPress={() => navigation.navigate("Intro2")}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                margin: 10,
                color: "#000",
              }}
            >
              Skip
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ width: 110, height: 50 }}
            onPress={() => navigation.navigate("Intro4")}
          >
            <LinearGradient
              colors={["#5BB0ED", "#0771BD"]}
              style={{
                flex: 1,
                paddingLeft: 15,
                paddingRight: 15,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                  margin: 10,
                  color: "#ffffff",
                  backgroundColor: "transparent",
                }}
              >
                Next
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Intro2;
