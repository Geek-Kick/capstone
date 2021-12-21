import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

const koreaLec = [
  {
    uri: "https://image.ebsi.co.kr/images/teacher_new/@/T0031.png",
    title: "개념의 나비효과",
    name: "윤혜정",
  },
  {
    uri: "https://image.ebsi.co.kr/images/teacher_new/@/T0119.png",
    title: "개기일식",
    name: "남궁민",
  },
  {
    uri: "https://image.ebsi.co.kr/images/teacher_new/@/T0353.png",
    title: "국어 담판",
    name: "최서희",
  },
  {
    uri: "https://image.ebsi.co.kr/images/teacher_new/@/T0011.png",
    title: "기승전-문학개념",
    name: "김기훈",
  },
  {
    uri: "https://image.ebsi.co.kr/images/teacher_new/@/T0033.png",
    title: "알고리즘 독서",
    name: "김철희",
  },
  {
    uri: "https://image.ebsi.co.kr/images/teacher_new/@/T0272.png",
    title: "독서로 나르샤",
    name: "명지희",
  },
  {
    uri: "https://image.ebsi.co.kr/images/teacher_new/@/T0269.png",
    title: "뿌리 깊은 언어",
    name: "장재혁",
  },
  {
    uri: "https://image.ebsi.co.kr/images/teacher_new/@/T0230.png",
    title: "마시멜로 언어와 매체",
    name: "정미나",
  },
  {
    uri: "https://image.ebsi.co.kr/images/teacher_new/@/T0269.png",
    title: "고난도X시크릿 모의고사",
    name: "장재혁",
  },
  {
    uri: "https://image.ebsi.co.kr/images/teacher_new/@/T0226.png",
    title: "언어와 매체",
    name: "장동준",
  },
  {
    uri: "https://image.ebsi.co.kr/images/teacher_new/@/T0034.png",
    title: "국어 Hyper",
    name: "설규환",
  },
];

const RecommendLecture = ({ lecture, navigation }) => {
  if (lecture == "국어") {
    return (
      <View>
        <Text style={style.represent_text}>맞춤 강의 {lecture}</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          {koreaLec.map((item) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("LectureClick");
              }}
            >
              <View style={style.image_name_total_box}>
                <Image
                  source={{ uri: `${item.uri}` }}
                  style={style.image_style}
                />
                <Text style={style.lecture_title}>{item.title}</Text>
                <Text style={style.lecture_name}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  } else if (!lecture) {
    return (
      <View>
        <Text style={style.represent_text}>나의 맞춤 강의 {lecture}</Text>
        <Text>국어가 아닙니다.</Text>
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
    margin: 20,
  },

  image_style: {
    borderRadius: 0,
    width: 100,
    height: 100,
  },

  lecture_title: {
    top: 5,
    width: 100,
    textAlign: "center",
    fontSize: 15,
  },

  lecture_name: {
    left: 25,
    fontSize: 13,
    margin: 10,
  },
});

export default RecommendLecture;
