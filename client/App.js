import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Full url" color="#f194ff" onPress={() => axiosTest1()} />
      <Button title="Proxy url" color="#f194ff" onPress={() => axiosTest2()} />
      <StatusBar style="auto" />
    </View>
  );
}

const axiosTest1 = () => {
  axios.get("http://localhost:5000/api/test").then((res) => {
    console.log(res.data);
  });
};

// proxy 문제 해결하기
// React native는 웹팩으로 번들링 되지 않아 안됨
const axiosTest2 = () => {
  axios.get("/test").then((res) => {
    console.log(res.data);
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
