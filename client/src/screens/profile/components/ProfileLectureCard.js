import React from "react";
import { Alert, Image, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

const ItemTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

const ItemDesc = styled.Text`
  font-size: 16px;
  margin-top: 5px;
  color: ${({ theme }) => theme.itemDesc};
  text-align: center;
`;

const ProfileLectureCard = ({ lectures, navigation }) => {
  const onClick = (lecture) => {
    // navigation.navigate(`${lecture.lectureLink}`);
    Alert.alert("구현해야함");
    [
      {
        text: "닫기",
      },
    ];
  };
  console.log("ProfileLecture");
  console.log(lectures);
  return (
    <>
      {lectures &&
        lectures.map((lecture, index) => {
          return (
            <View key={index}>
              <TouchableOpacity onPress={() => onClick(lecture)}>
                <Image
                  style={{
                    borderRadius: 0,
                    margin: 20,
                    width: 100,
                    height: 100,
                  }}
                  source={{ uri: `${lecture.lectureImage}` }}
                />
                <ItemTitle>{lecture.lectureName}</ItemTitle>
                <ItemDesc>{lecture.teacherName}</ItemDesc>
              </TouchableOpacity>
            </View>
          );
        })}
    </>
  );
};

export default ProfileLectureCard;
