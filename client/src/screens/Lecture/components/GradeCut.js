import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GradeCut = () => {
  return (
    <View style={style.grade_cut}>
      <View style={style.grade_name_box}>
        <View style={{ width: "3%" }} />
        <Text style={style.grade_name}>등급</Text>
        <Text style={style.grade_name}>국어</Text>
        <Text style={style.grade_name}>영어</Text>
        <Text style={style.grade_name}>수학</Text>
        <Text style={style.grade_name}>물리</Text>
        <Text style={style.grade_name}>화학</Text>
        <Text style={style.grade_name}>생명</Text>
        <Text style={style.grade_name}>지구과학</Text>
        <Text style={style.grade_name}>한국사</Text>
        <Text style={style.grade_name}>...</Text>
      </View>

      <View style={style.background_color_box}>
        <View style={{ width: "3.3%" }} />
        <Text style={style.grade_num}>1</Text>
        <Text style={style.grade_num}>87</Text>
        <Text style={style.grade_num}>92</Text>
        <Text style={style.grade_num}>91</Text>
        <Text style={style.grade_num}>94</Text>
        <Text style={style.grade_num}>47</Text>
        <Text style={style.grade_num}>48</Text>
        <Text style={style.grade_num}>47</Text>
        <Text style={style.grade_num}>45</Text>
      </View>

      <View style={style.white_color_box}>
        <View style={{ width: "3.3%" }} />
        <Text style={style.grade_num}>2</Text>
        <Text style={style.grade_num}>76</Text>
        <Text style={style.grade_num}>85</Text>
        <Text style={style.grade_num}>84</Text>
        <Text style={style.grade_num}>90</Text>
        <Text style={style.grade_num}>40</Text>
        <Text style={style.grade_num}>40</Text>
        <Text style={style.grade_num}>43</Text>
        <Text style={style.grade_num}>41</Text>
      </View>

      <View style={style.background_color_box}>
        <View style={{ width: "3.3%" }} />
        <Text style={style.grade_num}>3</Text>
        <Text style={style.grade_num}>69</Text>
        <Text style={style.grade_num}>78</Text>
        <Text style={style.grade_num}>80</Text>
        <Text style={style.grade_num}>82</Text>
        <Text style={style.grade_num}>37</Text>
        <Text style={style.grade_num}>35</Text>
        <Text style={style.grade_num}>36</Text>
        <Text style={style.grade_num}>35</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  grade_cut: {
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
    width: "10%",
  },

  grade_num: {
    fontSize: 12,
    color: "#000000",
    top: 5,
    width: "10%",
  },
});

export default GradeCut;
