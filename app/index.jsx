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
      <ImageBackground
        source={require("../assets/images/photo-bg.png")}
        style={{ flex: 1, position: "absolute", width: "100%", height: "100%" }}
      >
        <TouchableOpacity onPress={changeScreen} ><Text style={{ fontSize: 30 }}>+</Text></TouchableOpacity>
     
        {screen? <RegistrationScreen />:<LoginScreen />}
        
      </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
 
});
