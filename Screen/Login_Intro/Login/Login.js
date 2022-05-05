import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./style";

import { auth, database, Firestore } from "../../../Firebase/Config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Ionicons from "react-native-vector-icons/Ionicons";
import SLIcons from "react-native-vector-icons/SimpleLineIcons";
import F5Icons from "react-native-vector-icons/FontAwesome5";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPress = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        navigation.navigate("TabsNavigator");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <View style={styles.titleView}>
          <Text style={styles.title}> Nature Sound</Text>
        </View>
        <Image
          style={styles.logo}
          source={require("../../Image/Login1.1.png")}
        />
        <View style={styles.emailInput}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#629CC5"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

          <F5Icons
            style={styles.icon}
            name="user-alt"
            size={30}
            color="#0C578D"
          ></F5Icons>
        </View>

        <View style={styles.emailInput}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#629CC5"
            secureTextEntry
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

          <F5Icons
            style={styles.icon}
            name="eye"
            size={30}
            color="#0C578D"
          ></F5Icons>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
          <Text style={styles.buttonTitle}>Login</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
}
