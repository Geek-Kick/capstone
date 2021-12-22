import React from "react";
import { View, Text, StyleSheet } from "react-native";

const QuizDetail = () => {
  return (
    <View>
      <View style={style.quiz_num_subject_name}>
        <Text style={style.subject_name}>수학</Text>
        <Text style={style.quiz_num}>15234</Text>
      </View>
      <View style={style.quiz_content}>
        <Text style={{ fontSize: 15 }}>
          이산확률변수 X가 가지는 값은 1,2,3,4 이고 이산확률변수 Y가 가지는 값은
          1,4,8,16이다.{"\n"} p(X=k)=p(Y=k^2) (k=1,2,3,4)이다.{"\n"} E(X)=6,
          V(X)=1일 때, E(Y)의 값은?
        </Text>
      </View>
      <View style={style.answer_total_box}>
        <View style={style.answer_box}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>답 1. 33</Text>
        </View>
        <View style={style.answer_box}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>답 2. 34</Text>
        </View>
        <View style={style.answer_box}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>답 3. 35</Text>
        </View>
        <View style={style.answer_box}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>답 4. 36</Text>
        </View>
        <View style={style.answer_box}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>답 5. 37</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  quiz_num_subject_name: {
    flexDirection: "row",
    margin: "10%",
    marginTop: "5%",
    alignContent: "center",
    justifyContent: "center",
  },
  subject_name: {
    fontSize: 20,
    margin: 10,
    marginTop: 30,
  },
  quiz_num: {
    fontSize: 40,
    margin: 10,
  },
  quiz_content: {
    alignContent: "center",
    justifyContent: "center",
    marginLeft: "27%",
  },
  answer_total_box: {
    marginTop: "20%",
  },
  answer_box: {
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: "2%",
    backgroundColor: "#EBEDFC",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default QuizDetail;
