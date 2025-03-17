import React, { useState } from "react";
import Styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity, 
  SafeAreaView
} from "react-native";
import RegistrationScreen from "../components/RegistrationScreen/RegistrationScreen.jsx";
import LoginScreen from "../components/LoginScreen/LoginScreen.jsx";



export default function App() {
  const [screen, onChangeScreen] = useState(true);
  const changeScreen = () => { 
    onChangeScreen(!screen);
  }
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require("../assets/images/photo-bg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <TouchableOpacity onPress={changeScreen}>
          <Text style={{ fontSize: 30 }}>+</Text>
        </TouchableOpacity>

        {screen ? <RegistrationScreen /> : <LoginScreen />}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute", // Убираем лишние отступы
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
