import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome } from "@expo/vector-icons";

const quiz = [];

for (let i = 0; i < 20; i++) {
  quiz.push({
    num: 15234,
    title: "제목1",
    info: "국어",
    try: 1523,
    ans: 15.342,
  });
}

const QuizMain = ({ navigation }) => {
  const [age, setAge] = useState();
  const [subject, setSubject] = useState();
  const [difficulty, setDefficulty] = useState();
  return (
    <View>
      <View style={style.picker_box}>
        <Picker
          style={style.picker_style}
          selectedValue={age}
          onValueChange={(itemValue, itemIndex) => setAge(itemValue)}
        >
          <Picker.Item label="고1" value="17" />
          <Picker.Item label="고2" value="18" />
          <Picker.Item label="고3" value="19" />
        </Picker>

        <Picker
          style={style.picker_style}
          selectedValue={subject}
          onValueChange={(itemValue, itemIndex) => setSubject(itemValue)}
        >
          <Picker.Item label="국어" value="1" />
          <Picker.Item label="영어" value="2" />
          <Picker.Item label="수학" value="3" />
          <Picker.Item label="물리" value="4" />
          <Picker.Item label="화학" value="5" />
          <Picker.Item label="생명과학" value="6" />
          <Picker.Item label="지구과학" value="7" />
        </Picker>

        <Picker
          style={style.picker_style}
          selectedValue={difficulty}
          onValueChange={(itemValue, itemIndex) => setDefficulty(itemValue)}
        >
          <Picker.Item label="쉬움" value="1" />
          <Picker.Item label="보통" value="2" />
          <Picker.Item label="어려움" value="3" />
        </Picker>

        <TouchableOpacity onPress={() => Alert.alert("hi")}>
          <FontAwesome
            name="search"
            size={40}
            color="black"
            style={style.serch_icon_image}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={style.scroll_view}>
        <View style={style.quiz_top_box}>
          <Text style={style.quiz_num}>퀴즈번호</Text>
          <Text style={style.quiz_title}>제목</Text>
          <Text style={style.quiz_info}>정보</Text>
          <Text style={style.quiz_try_num}>시도한사람</Text>
          <Text style={style.quiz_percent}>정답률</Text>
        </View>
        {quiz.map((item, index) => {
          if (index % 2 == 1) {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("QuizDetail");
                }}
              >
                <View style={style.quiz_box}>
                  <Text style={style.quiz_num}>{item.num}</Text>
                  <Text style={style.quiz_title}>{item.title}</Text>
                  <Text style={style.quiz_info}>{item.info}</Text>
                  <Text style={style.quiz_try_num}>{item.try}</Text>
                  <Text style={style.quiz_percent}>{item.ans}</Text>
                </View>
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("QuizDetail");
                }}
              >
                <View style={style.quiz_white_box}>
                  <Text style={style.quiz_num}>{item.num}</Text>
                  <Text style={style.quiz_title}>{item.title}</Text>
                  <Text style={style.quiz_info}>{item.info}</Text>
                  <Text style={style.quiz_try_num}>{item.try}</Text>
                  <Text style={style.quiz_percent}>{item.ans}</Text>
                </View>
              </TouchableOpacity>
            );
          }
        })}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  picker_box: {
    width: "100%",
    height: "10%",
    flexDirection: "row",
  },
  picker_style: {
    width: 100,
    height: 50,
    marginLeft: 170,
  },
  serch_icon_image: {
    marginLeft: 100,
    width: 100,
    height: 100,
    marginTop: 90,
  },

  scroll_view: {
    width: "75%",
    height: "60%",
    backgroundColor: "#eeeeee",
    marginTop: "17.5%",
    marginLeft: "12.5%",
    flexDirection: "column",
    borderRadius: 10,
  },

  quiz_top_box: {
    backgroundColor: "#C4C4C4",
    width: "100%",
    padding: 5,
    margin: 0,
    flexDirection: "row",
  },

  quiz_white_box: {
    backgroundColor: "#ffffff",
    width: "100%",
    padding: 5,
    margin: 0,
    flexDirection: "row",
  },

  quiz_box: {
    width: "100%",
    padding: 5,
    margin: 0,
    flexDirection: "row",
  },

  quiz_num: {
    fontSize: 20,
    marginRight: "15%",
    marginLeft: 10,
  },
  quiz_title: {
    fontSize: 20,
    marginRight: "25%",
  },
  quiz_info: {
    fontSize: 20,
    marginRight: "10%",
  },
  quiz_try_num: {
    fontSize: 20,
    marginRight: "10%",
  },
  quiz_percent: {
    fontSize: 20,
  },
});

export default QuizMain;
