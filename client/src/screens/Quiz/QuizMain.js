import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const QuizMain = () => {
  const [age, setAge] = useState();
  const [subject, setSubject] = useState();
  const [difficulty, setDefficulty] = useState();
  return (
    <View style={{ margin: 20 }}>
      <Text>hi</Text>

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

        <TouchableOpacity>
          <Text style={{ width: 50 }}>Click</Text>
        </TouchableOpacity>
      </View>
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
    margin: "5%",
  },
  button_style: {
    width: 100,
    height: 50,
  },
});

export default QuizMain;
