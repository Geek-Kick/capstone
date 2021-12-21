import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Table = () => {
  return (
    <View style={style.grade_cut}>
      <View style={style.grade_name_box}>
        <View style={{ width: "3%" }} />
        <Text style={style.grade_name}>종류</Text>
        <Text style={style.grade_name}>기여도</Text>

      </View>

      <View style={style.background_color_box}>
        <View style={{ width: "3.3%" }} />
        <Text style={style.grade_num}>출석</Text>
        <Text style={style.grade_num}>33.8</Text>


      </View>

      <View style={style.white_color_box}>
        <View style={{ width: "3.3%" }} />
        <Text style={style.grade_num}>퀴즈</Text>
        <Text style={style.grade_num}>42.3</Text>

      </View>
      <View style={style.background_color_box}>
        <View style={{ width: "3.3%" }} />
        <Text style={style.grade_num}>커뮤니티</Text>
        <Text style={style.grade_num}>0.0</Text>

      </View>
    </View>
  );
};

const style = StyleSheet.create({
  grade_cut: {
    marginLeft: 20,
    marginRight: 20,
    // position: "absolute",
    // left: 10,
    top: 5,
    // width: 675,
    // flexDirection: "row",
    height: 108,
    backgroundColor: "#ededf6",
    borderRadius: 10,
  },

  grade_name_box: {
    height: "25%",
    width: "100%",
    backgroundColor: "#969CBA",
    borderRadius: 10,
    // 로우로 배치
    flexDirection: "row",
  },

  background_color_box: {
    height: "25%",
    width: "100%",
    flexDirection: "row",
  },

  white_color_box: {
    height: "25%",
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },

  grade_name: {
    fontSize: 12,
    color: "#ffffff",
    top: 5,
    width: "50%",
  },

  grade_num: {
    fontSize: 12,
    color: "#000000",
    top: 5,
    width: "50%",
  },
});

export default Table;
