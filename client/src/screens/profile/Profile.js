import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

import { UserContext } from "../../contexts";
import styled from "styled-components/native";
import { Button, Image, Input } from "../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { theme } from "../../theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import ProfileLectureCard from "./components/ProfileLectureCard";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
`;
const LectureContainer = styled.View`
  align-items: center;
  border-right-width: 1px;
  padding: 0 10px 0 10px;
  border-color: ${{ theme } > theme.itemDesc};
`;
const RowContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.imgBtnBackground};
  padding: 20px;
  border-radius: 10px;
`;

const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.itemBorder};
  padding: 15px 20px;
`;

const ItemTextContainer = styled.View`
  flex: 1;
  flex-direction: row;
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
const MyReviewContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;
const ReviewContainer = styled.View`
  flex: 0.4;
  background-color: ${({ theme }) => theme.reviewBackground};
  border-width: 1px;
  border-color: ${({ theme }) => theme.itemDesc};
  border-radius: 10px;
  margin-top: 0px;
  padding: 7px 20px 20px 20px;
  justify-content: center;
`;
const ColumnContainer = styled.View`
  flex-direction: column;
`;
const TrophyContainer = styled.View`
  background-color: ${({ theme }) => theme.trophyColor};
  border-width: 1px;
  border-color: ${({ theme }) => theme.trophyColor};
  border-radius: 50px;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const RankingContainer = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.background};
  border-width: 1px;
  border-color: ${({ theme }) => theme.imgBtnBackground};
  border-radius: 10px;
  margin: 20px 0 20px 20px;
  width: 95%;
  justify-content: space-around;
  align-items: center;
`;
const TextContainer = styled.View`
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  border-radius: 10px;
`;

const RowwContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 20px 5px 0;
`;

const LvText = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

const StyledText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Profile = ({ navigation, route }) => {
  const { setUser } = useContext(UserContext);
  const theme = useContext(ThemeContext);
  const [name, setName] = useState(null);
  const [lecture, setLecture] = useState();
  useEffect(() => {
    AsyncStorage.getItem("token", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        axios
          .get("http://13.209.8.159:5000/users/profile", {
            headers: {
              Authorization: `Bearar ${result}`,
            },
          })
          .then((response) => {
            console.log(response.data);
            setName(response.data.nickName);
            setLecture(response.data.lecuture);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }, []);
  // console.log(route.params);
  return (
    <KeyboardAwareScrollView extraScrollHeight={40}>
      <Container style={{ margin: 20 }}>
        <RowContainer>
          <ColumnContainer>
            <Input
              label="사용자 이름"
              value={name}
              containerStyle={{ height: 10 }}
              style={{ width: 300, height: 55 }}
            />
            <LvText>Lv.01 브론즈</LvText>
            <Button
              title="내 정보수정 >"
              onPress={() => {}}
              containerStyle={{
                backgroundColor: "#a6a6a6",
                width: 20,
                height: 30,
                marginRight: 220,
              }}
              textStyle={{ fontSize: 10 }}
            />
            <Button
              title="로그아웃 >"
              onPress={() => {
                setUser({});
              }}
              containerStyle={{
                backgroundColor: "#7e0000",
                width: 50,
                height: 30,
                marginRight: 220,
              }}
              textStyle={{ fontSize: 10 }}
            />
          </ColumnContainer>

          <Image
            source="https://firebasestorage.googleapis.com/v0/b/rn-chat-fb183.appspot.com/o/icon.png?alt=media"
            style={{ width: 130, height: 130, marginTop: 20 }}
          />
        </RowContainer>
        <Button
          title="Main"
          containerStyle={{
            flex: 1,
            width: 20,
            borderRadius: 0,
            /* backgroundColor: "#fff", borderWidth: 1, borderColor: theme.main */
          }}
          /* textStyle={{ color: theme.main }}  */
          onPress={() => {
            console.log("버튼 ->");
          }}
        />
        <StyledText style={{ margin: 10 }}>수강중인 강좌</StyledText>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <ProfileLectureCard lectures={lecture} />
          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100 }}
                url="https://image.ebsi.co.kr/images/teacher_new/@/T0031.png"
              />
              <ItemTitle>개념의 나비효과</ItemTitle>
              <ItemDesc>윤혜정</ItemDesc>
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                url="https://image.ebsi.co.kr/images/teacher_new/@/T0251.png"
                style={{ borderRadius: 0, width: 100, height: 100 }}
              />
              <ItemTitle>찹쌀떡 수학l</ItemTitle>
              <ItemDesc>정유빈</ItemDesc>
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100 }}
                url="https://image.ebsi.co.kr/images/teacher_new/@/T0119.png"
              />
              <ItemTitle>개기일식</ItemTitle>
              <ItemDesc>남궁민</ItemDesc>
            </LectureContainer>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                url="https://image.ebsi.co.kr/images/teacher_new/@/T0353.png"
                style={{ borderRadius: 0, width: 100, height: 100 }}
              />
              <ItemTitle>국어 담판</ItemTitle>
              <ItemDesc>최서희</ItemDesc>
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100 }}
                url="https://image.ebsi.co.kr/images/teacher_new/@/T0248.png"
              />
              <ItemTitle>꽉잡는 문학개념</ItemTitle>
              <ItemDesc>곽동훈</ItemDesc>
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                url="https://image.ebsi.co.kr/images/teacher_new/@/T0103.png"
                style={{ borderRadius: 0, width: 100, height: 100 }}
              />
              <ItemTitle>프러포즈 수학ll</ItemTitle>
              <ItemDesc>심주석</ItemDesc>
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                url="https://image.ebsi.co.kr/images/teacher_new/@/T0023.png"
                style={{ borderRadius: 0, width: 100, height: 100 }}
              />
              <ItemTitle>마법구문독해</ItemTitle>
              <ItemDesc>이아영</ItemDesc>
            </LectureContainer>
          </TouchableOpacity> */}
        </ScrollView>
        <RowContainer></RowContainer>
        <StyledText style={{ margin: 10 }}>나의 수강평</StyledText>
        <MyReviewContainer>
          <ReviewContainer>
            <ReviewTitle style={{ color: "#8E75F9", marginLeft: 130 }}>
              개념의 나비효과
            </ReviewTitle>
            <ReviewTextContainer>
              <ReviewTitle>박상호</ReviewTitle>
              <ReviewTime> 2021-12-10</ReviewTime>
            </ReviewTextContainer>
            <ReviewDesc>정말 유익한 강의입니다!</ReviewDesc>
            <ReviewTextContainer containerStyle={{ marginTop: 10 }}>
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star-border" size={24} color="#F8C646" />
            </ReviewTextContainer>
          </ReviewContainer>
          <ReviewContainer>
            <ReviewTitle style={{ color: "#8E75F9", marginLeft: 130 }}>
              개기 일식
            </ReviewTitle>
            <ReviewTextContainer>
              <ReviewTitle>박상호</ReviewTitle>
              <ReviewTime> 2021-11-29</ReviewTime>
            </ReviewTextContainer>
            <ReviewDesc>강의 내용이 조금 어려워요..</ReviewDesc>
            <ReviewTextContainer containerStyle={{ marginTop: 10 }}>
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star-border" size={24} color="#F8C646" />
              <MaterialIcons name="star-border" size={24} color="#F8C646" />
              <MaterialIcons name="star-border" size={24} color="#F8C646" />
            </ReviewTextContainer>
          </ReviewContainer>
        </MyReviewContainer>
        <RowContainer />
        <StyledText style={{ margin: 10 }}>나의 랭킹</StyledText>
        <MyReviewContainer></MyReviewContainer>
        <RankingContainer style={{ justifyContent: "space-around" }}>
          <MaterialIcons name="circle" size={90} color="#F8C646" />
          <TextContainer>
            <RowwContainer>
              <ItemTitle>등수 </ItemTitle>
              <StyledText style={{ fontWeight: "bold" }}>5400위</StyledText>
            </RowwContainer>
          </TextContainer>
          <StyledText>종합</StyledText>
        </RankingContainer>
        <RankingContainer style={{ justifyContent: "space-around" }}>
          <MaterialIcons name="circle" size={90} color="#00FFD1" />
          <TextContainer>
            <RowwContainer>
              <ItemTitle>등수 </ItemTitle>
              <StyledText style={{ fontWeight: "bold" }}>340위</StyledText>
            </RowwContainer>
          </TextContainer>
          <StyledText>학익고등학교</StyledText>
        </RankingContainer>
        <RowContainer />
        <StyledText style={{ margin: 10 }}>나의 퀴즈</StyledText>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Profile;
