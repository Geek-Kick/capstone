import React, { useContext } from "react";
import styled from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, Image, Input } from "../../components";
import { Alert, Dimensions } from "react-native";
import Navigation from "../../navigations";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemeContext } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: center;
`;

const LectureContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const VideoContainer = styled.View`
  flex: 1;
`;
const LectureDesc = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.itemDesc};
`;
const StyledText = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const ReviewTextContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const ReviewTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;

const ReviewDesc = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.itemDesc};
  margin-top: 5px;
`;

const ReviewTime = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.itemDesc};
`;

const ReviewContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.reviewBackground};
  border-width: 1px;
  border-color: ${({ theme }) => theme.itemDesc};
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
  justify-content: center;
`;
const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.imgBtnBackground};
  padding: 0 20px;
`;
const IntroduceContainer = styled.View`
  width: 80%;
  padding-top: 20px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.imgBtnBackground};
`;
const IconText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.main};
`;
const LectureClick = ({ navigation }) => {
  const theme = useContext(ThemeContext);
  return (
    <KeyboardAwareScrollView style={{ margin: 20 }}>
      <Container style={{ margin: 20 }}>
        <VideoContainer>
          <Image
            url="https://i.ytimg.com/vi/qJL_NKPdC18/maxresdefault.jpg"
            style={{
              borderRadius: 0,
              width: Dimensions.get("window").width,
              height: 300,
              margin: 10,
            }}
            showButton={true}
          />
        </VideoContainer>
        <StyledText>윤혜정의 개념의 나비효과</StyledText>

        <Button
          title="링크 바로가기"
          onPress={() => {
            console.log("링크");
          }}
          containerStyle={{ marginBottom: 30, marginLeft: 60, marginRight: 60 }}
        />
        <RowContainer style={{ paddingBottom: 20 }}>
          <Container>
            <TouchableOpacity>
              <MaterialIcons
                name="add"
                size={40}
                color={theme.main}
                style={{ marginLeft: 20, marginRight: 20 }}
              />
              <IconText>강의 바구니</IconText>
            </TouchableOpacity>
          </Container>
          <Container>
            <TouchableOpacity>
              <MaterialIcons
                name="rate-review"
                size={40}
                color={theme.main}
                style={{ marginLeft: 13, marginRight: 20 }}
              />
              <IconText>평가 하기</IconText>
            </TouchableOpacity>
          </Container>
          <Container>
            <TouchableOpacity>
              <MaterialIcons
                name="ios-share"
                size={40}
                color={theme.main}
                style={{ marginLeft: 10, marginRight: 20 }}
              />
              <IconText>공유 하기</IconText>
            </TouchableOpacity>
          </Container>
        </RowContainer>
        <IntroduceContainer>
          <StyledText style={{ marginBottom: 5 }}>강좌 특징</StyledText>
          <LectureDesc>#꼼꼼한 강좌</LectureDesc>
          <LectureDesc>#요점을 확실하게 알려주는 강좌</LectureDesc>
          <LectureDesc>#핵심을 확실하게 알려주는 강좌</LectureDesc>
          <StyledText style={{ marginTop: 5, marginBottom: 5 }}>
            추천 대상
          </StyledText>
          <LectureDesc>개념 학습이 필요한 수강생</LectureDesc>
          <LectureDesc>수능+내신 모두 대비하고 싶은 수강생</LectureDesc>
          <LectureDesc>방대한 양을 핵심 압축 정리하고 싶은 수강생</LectureDesc>
        </IntroduceContainer>
        <IntroduceContainer>
          <StyledText>강의평</StyledText>
          <ReviewContainer>
            <ReviewTextContainer>
              <ReviewTitle>박상호</ReviewTitle>
              <ReviewTime> 2021-12-10</ReviewTime>
            </ReviewTextContainer>
            <ReviewDesc>정말 유익한 강의입니다!</ReviewDesc>
            <ReviewTextContainer containerStyle={{ marginTop: 10 }}>
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star-border" size={24} color="#F8C646" />
              <MaterialIcons name="star-border" size={24} color="#F8C646" />
            </ReviewTextContainer>
          </ReviewContainer>
          <ReviewContainer>
            <ReviewTextContainer>
              <ReviewTitle>최승용</ReviewTitle>
              <ReviewTime> 2021-12-02</ReviewTime>
            </ReviewTextContainer>
            <ReviewDesc>
              저 같은 돌머리도 이해시켜주시는 문법강의 구세주입니다!!
            </ReviewDesc>
            <ReviewTextContainer containerStyle={{ marginTop: 10 }}>
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star-half" size={24} color="#F8C646" />
              <MaterialIcons name="star-border" size={24} color="#F8C646" />

            </ReviewTextContainer>
          </ReviewContainer>
          <ReviewContainer>
            <ReviewTextContainer>
              <ReviewTitle>황승환</ReviewTitle>
              <ReviewTime> 2021-12-01</ReviewTime>
            </ReviewTextContainer>
            <ReviewDesc>
              이 강의 듣고 9월 모평 1등급 맞았습니다. 갓혜정
            </ReviewDesc>
            <ReviewTextContainer containerStyle={{ marginTop: 10 }}>
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
            </ReviewTextContainer>
          </ReviewContainer>
          <Button
            title="강의평 더보기 >"
            onPress={() => { }}
            containerStyle={{
              backgroundColor: "#EFEBFF",
            }}
            textStyle={{ fontSize: 10, color: "black" }}
          />
          <Input placeholder="강의평을 입력하세요." />
          <Button
            title="등록"
            containerStyle={{}}
            onPress={() => console.log("등록")}
          />
        </IntroduceContainer>

        <StyledText>비슷한 강좌 컨텐츠</StyledText>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }}
              />
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }}
              />
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }}
              />
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }}
              />
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }}
              />
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }}
              />
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }}
              />
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }}
              />
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }}
              />
            </LectureContainer>
          </TouchableOpacity>
        </ScrollView>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default LectureClick;
