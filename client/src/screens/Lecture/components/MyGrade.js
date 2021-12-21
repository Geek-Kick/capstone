import React from "react";
import { View, StyleSheet, Text } from "react-native";
const MyGrade = () => {
  return (
    <View style={style.total_box}>
      <View style={style.grade_name_box}>
        <View style={{ width: "15%" }} />

        <Text style={style.grade_name}>국어</Text>
        <Text style={style.grade_name}>수학2</Text>
        <Text style={style.grade_name}>영어</Text>
        <Text style={style.grade_name}>한국사</Text>
        <Text style={style.grade_name}>생명2</Text>
        <Text style={style.grade_name}>물리2</Text>
      </View>

      <View style={style.grade_num_box}>
        <View style={{ width: "15.5%" }} />
        <Text style={style.grade_num}>4</Text>
        <Text style={style.grade_num}>2</Text>
        <Text style={style.grade_num}>1</Text>
        <Text style={style.grade_num}>3</Text>
        <Text style={style.grade_num}>3</Text>
        <Text style={style.grade_num}>3</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  total_box: {
    backgroundColor: "#EDEDF6",
    borderRadius: 10,
    height: 54,
  },

  grade_name_box: {
    backgroundColor: "#969CBA",
    flexDirection: "row",
    width: "100%",
    height: "50%",
    borderRadius: 10,
  },

  grade_num_box: {
    flexDirection: "row",
    width: "100%",
    height: "50%",
  },

  grade_name: {
    fontSize: 12,
    color: "#ffffff",
    top: 5,
    width: "12.5%",
  },

  grade_num: {
    fontSize: 12,
    color: "#000000",
    top: 5,
    width: "12.5%",
  },
});
export default MyGrade;
