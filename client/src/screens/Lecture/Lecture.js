import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, Image, Input } from "../../components";
import { LectureClick } from "..";
import { ScrollView, HorizontalScrollView, FlatList } from "react-native";
import GradeCut from "./components/GradeCut";
import MyGrade from "./components/MyGrade";
import RecommendLecture from "./components/RecommendLecture";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;
const LectureContainer = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.imgBtnBackground};
  border-radius: 10px;
`;

const RowContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.imgBtnBackground};
  padding: 5px 20px 5px 0;
`;

const ColumnContainer = styled.View`
  flex-direction: column;
`;
const LevelContainer = styled.View`
  background-color: ${({ theme }) => theme.background};
  border-width: 1px;
  border-color: ${({ theme }) => theme.imgBtnBackground};
  border-radius: 10px;
  margin: 20px 0 20px 0;
  width: 95%;
`;
const StyledText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin: 10px;
`;
const GradeText = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.gradeText};
`;
const MonthText = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.monthText};
`;

const LectureItemContainer = styled.TouchableOpacity`
  align-items: center;
  border-right-width: 1px;
  border-color: ${({ theme }) => theme.itemBorder};
`;
const ItemTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

const ItemDesc = styled.Text`
  font-size: 16px;
  margin-top: 5px;
  color: ${({ theme }) => theme.itemDesc};
`;
const lectureItem = [];
for (let i = 0; i < 10; i++) {
  lectureItem.push({
    id: i,
    uri: "",
    title: "",
  });
}
const LectureItemImage = styled.Image`
background-color : ${({ theme }) => theme.text}
width : 100px;
height : 150px;
margin : 10px;
`;
const LectureItemTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

const LectureItemDesc = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.itemDesc};
`;
const LectureItem = ({ id, url, title }, onPress) => {
  return (
    <LectureItemContainer onPress={onPress}>
      <LectureItemImage url={url} />
      <LectureItemTitle>{title}</LectureItemTitle>
    </LectureItemContainer>
  );
};
const Lecture = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView extraScrollHeight={40}>
      <Container style={{ margin: 20 }}>
        <StyledText>??? ?????? ??????</StyledText>
        <RowContainer>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
              <GradeText style={{ color: "#111", paddingLeft: 20, }}>
                1?????? 3???
              </GradeText>
            </TouchableOpacity>
            <TouchableOpacity>
              <GradeText style={{ paddingLeft: 150 }}>1?????? 6???</GradeText>
            </TouchableOpacity>
            <TouchableOpacity>
              <GradeText style={{ paddingLeft: 150 }}>1?????? 9???</GradeText>
            </TouchableOpacity>
            <TouchableOpacity>
              <GradeText style={{ paddingLeft: 150 }}>2?????? 3???</GradeText>
            </TouchableOpacity>
            <TouchableOpacity>
              <GradeText style={{ paddingLeft: 150 }}>2?????? 6???</GradeText>
            </TouchableOpacity>
            <TouchableOpacity>
              <GradeText style={{ paddingLeft: 150 }}>2?????? 6???</GradeText>
            </TouchableOpacity>
            <TouchableOpacity>
              <GradeText style={{ paddingLeft: 150 }}>2?????? 9???</GradeText>
            </TouchableOpacity>
            <TouchableOpacity>
              <GradeText style={{ paddingLeft: 150 }}>3?????? 3???</GradeText>
            </TouchableOpacity>
            <TouchableOpacity>
              <GradeText style={{ paddingLeft: 150 }}>3?????? 6???</GradeText>
            </TouchableOpacity>
            <TouchableOpacity>
              <GradeText style={{ paddingLeft: 150 }}>3?????? 9???</GradeText>
            </TouchableOpacity>
          </ScrollView>
        </RowContainer>
        {/* <RowContainer>
                    <TouchableOpacity><GradeText style={{ color: "#111" }}>1??????</GradeText></TouchableOpacity>
                    <TouchableOpacity><GradeText>2??????</GradeText></TouchableOpacity>
                    <TouchableOpacity><GradeText>3??????</GradeText></TouchableOpacity>
                </RowContainer>
                <RowContainer>
                    <TouchableOpacity><MonthText style={{ color: "#111" }}>3???</MonthText></TouchableOpacity>
                    <TouchableOpacity><MonthText>6???</MonthText></TouchableOpacity>
                    <TouchableOpacity><MonthText>9???</MonthText></TouchableOpacity>
                    <TouchableOpacity><MonthText>11???</MonthText></TouchableOpacity>
                </RowContainer> */}
        <RowContainer>
          <LevelContainer style={{ padding: 20 }}>
            <StyledText>?????????</StyledText>
            <GradeCut />
            <StyledText>??? ??????</StyledText>
            <MyGrade />
          </LevelContainer>
        </RowContainer>

        {/* ?????? ?????? ?????? */}
        <RecommendLecture navigation={navigation} />

        <RowContainer />
        <RecommendLecture lecture="??????" navigation={navigation} />

        {/* <StyledText>?????? ?????? OOO</StyledText> */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={true}
        ></ScrollView>
        <RowContainer />
        <RecommendLecture lecture="??????" navigation={navigation} />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Lecture;
