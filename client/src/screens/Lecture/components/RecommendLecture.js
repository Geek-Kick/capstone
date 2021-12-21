import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const RecommendLecture = ({ lecture }) => {
  if (lecture == "국어") {
    return (
      <View>
        <Text style={style.represent_text}>맞춤 강의 {lecture}</Text>
        <View sytle={style.image_name_total_box}>
          <View>
            <Image
              source={{
                uri: "https://image.ebsi.co.kr/images/teacher_new/@/T0031.png",
              }}
              style={style.image_style}
            />
            <Text style={style.lecture_title}>국어 개념 뿌수기</Text>
            <Text style={style.lecture_name}>윤혜정 </Text>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text style={style.represent_text}>맞춤 강의 {lecture}</Text>
        <Text>국어가 아닙니다.</Text>
      </View>
    );
  }
};

const style = StyleSheet.create({
  represent_text: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
  },

  image_name_total_box: {
    flexDirection: "row",
  },

  image_style: {
    borderRadius: 0,
    width: 100,
    height: 100,
  },

  lecture_title: {
    fontSize: 15,
    margin: 5,
  },

  lecture_name: {
    fontSize: 10,
    margin: 10,
  },
});

export default RecommendLecture;
